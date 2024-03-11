import { Box, Button, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Education from '../components/Edit/Education'
import WorkHistory from '../components/Edit/WorkHistory'
import {
  resume__address,
  resume__education,
  resume__email,
  resume__name,
  resume__number,
  resume__professional__summary,
  resume__work__history,
} from '../lib/localStorageItems'
import {
  localStorageGetAndSetState,
  localStorageGetParseAndSetState,
  stringify,
} from '../lib/utils'
import '../styles/css/Edit.css'

const Edit = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [professionalSummary, setProfessionalSummary] = useState<string>('')

  const [workHistory, setWorkHistory] = useState<
    {
      title: string
      tenure: string
      location: string
      descriptions: string[]
    }[]
  >([])
  const [educations, setEducations] = useState<
    {
      degree: string
      university: string
      location: string
      year: string
    }[]
  >([])

  useEffect(() => {
    localStorageGetAndSetState(resume__name, setName)
    localStorageGetAndSetState(resume__email, setEmail)
    localStorageGetAndSetState(resume__number, setNumber)
    localStorageGetAndSetState(resume__address, setAddress)
    localStorageGetAndSetState(resume__professional__summary, setProfessionalSummary)
    localStorageGetParseAndSetState<typeof workHistory>(resume__work__history, setWorkHistory)
    localStorageGetParseAndSetState<typeof educations>(resume__education, setEducations)
  }, [])

  return (
    <Box
      sx={{
        width: '80%',
        margin: '20px auto',
        border: '1px solid black',
        borderRadius: '20px',
        boxShadow: '0 10px 38px 0 rgba(0, 0, 0, 0.3)',
        padding: '0.8rem',
      }}
    >
      <Box display='flex' flexDirection='column' alignItems='center'>
        <TextField
          type='text'
          placeholder='Enter Name'
          variant='outlined'
          id='outlined-basic'
          label='Name'
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          inputProps={{
            style: { fontSize: 51, fontWeight: 'bolder', padding: '1px 5px' },
          }}
          sx={{
            textAlign: 'center',
            fontWeight: '800',
            width: '99%',
          }}
        />

        <Button
          variant='outlined'
          onClick={() => {
            localStorage.setItem(resume__name, name)
          }}
          sx={{
            marginTop: 1,
            marginLeft: 'auto',
            justifySelf: 'right',
          }}
        >
          Save
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px 0' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <TextField
            placeholder='Enter Address'
            value={address}
            variant='outlined'
            id='outlined-basic'
            label='Address'
            onChange={e => {
              setAddress(e.target.value)
            }}
            // sx={{ height: 20 }}
            // inputProps={{
            //   height: 20,
            // }}
            // InputLabelProps={{
            //   style: {
            //     // fontSize: '20px',
            //   },
            // }}
          />
          <TextField
            placeholder='Enter Phone Number'
            value={number}
            variant='outlined'
            id='outlined-basic'
            label='Phone Number'
            onChange={e => {
              setNumber(e.target.value)
            }}
          />
          <TextField
            placeholder='Enter Email'
            value={email}
            variant='outlined'
            id='outlined-basic'
            label='Email'
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </Box>
        <Button
          variant='outlined'
          sx={{
            marginTop: 1,
            marginLeft: 'auto',
            justifySelf: 'right',
          }}
          onClick={() => {
            localStorage.setItem(resume__email, email)
            localStorage.setItem(resume__number, number)
            localStorage.setItem(resume__address, address)
          }}
        >
          Save
        </Button>
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: '800',
          }}
          variant='h5'
        >
          Professional Summary
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <textarea
            rows={5}
            style={{ width: '100%' }}
            value={professionalSummary}
            onChange={e => {
              setProfessionalSummary(e.target.value)
            }}
          ></textarea>

          <Button
            variant='outlined'
            sx={{
              marginTop: 1,
              marginLeft: 'auto',
              justifySelf: 'right',
            }}
            onClick={() => {
              localStorage.setItem(resume__professional__summary, professionalSummary)
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: '800',
          }}
          variant='h5'
        >
          Work History
        </Typography>
        {workHistory.map((work, index) => (
          <WorkHistory
            key={index}
            descriptions={work.descriptions}
            location={work.location}
            tenure={work.tenure}
            title={work.title}
            saveWorkHistory={(
              title: string,
              tenure: string,
              location: string,
              descriptions: string[]
            ) => {
              const updatedWorkHistory = [
                ...workHistory.slice(0, index),
                {
                  descriptions,
                  title,
                  tenure,
                  location,
                },
                ...workHistory.slice(index + 1),
              ]

              setWorkHistory(updatedWorkHistory)
            }}
            index={index}
          />
        ))}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant='outlined'
            onClick={() => {
              setWorkHistory([
                ...workHistory,
                {
                  descriptions: [],
                  location: '',
                  tenure: '',
                  title: '',
                },
              ])
            }}
            sx={{ marginLeft: 1, marginRight: 1 }}
          >
            Add Work History
          </Button>
          <Button
            variant='outlined'
            className='save__button'
            onClick={() => {
              localStorage.setItem(resume__work__history, stringify(workHistory))
            }}
            sx={{ marginLeft: 1, marginRight: 1 }}
          >
            Save
          </Button>
        </Box>
      </Box>

      <Box className='resume__education__container edit__container'>
        <Typography
          sx={{
            fontWeight: '800',
          }}
          variant='h5'
        >
          Work History
        </Typography>
        {educations.map((education, index) => (
          <Education
            key={index}
            index={index}
            degree={education.degree}
            location={education.location}
            university={education.university}
            year={education.year}
            saveEducation={(degree: string, university: string, location: string, year: string) => {
              const updatedEducation = [
                ...educations.slice(0, index),
                {
                  degree,
                  university,
                  year,
                  location,
                },
                ...educations.slice(index + 1),
              ]

              setEducations(updatedEducation)
            }}
          />
        ))}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant='outlined'
            sx={{ marginLeft: 1, marginRight: 1 }}
            onClick={() => {
              setEducations([
                ...educations,
                {
                  degree: '',
                  university: '',
                  year: '',
                  location: '',
                },
              ])
            }}
          >
            Add Education
          </Button>
          <Button
            variant='outlined'
            className='save__button'
            sx={{ marginLeft: 1, marginRight: 1 }}
            onClick={() => {
              localStorage.setItem(resume__education, stringify(educations))
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Edit
