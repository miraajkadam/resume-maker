import { Box, Button, TextField, Typography } from '@mui/material'
import { Fragment, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

const WorkHistory = ({
  descriptions,
  location,
  tenure,
  title,
  saveWorkHistory,
  removeWorkHistory,
  index,
}: {
  descriptions: string[]
  title: string
  tenure: string
  location: string
  index: number
  saveWorkHistory: (title: string, tenure: string, location: string, descriptions: string[]) => void
  removeWorkHistory: (index: number) => void
}) => {
  const [workDescriptions, setWorkDescriptions] = useState<string[]>(descriptions)
  const [workTitle, setWorkTitle] = useState<string>(title)
  const [workTenure, setWorkTenure] = useState<string>(tenure)
  const [workLocation, setWorkLocation] = useState<string>(location)

  return (
    <Box key={index} sx={{ margin: '20px 0', display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant='h5'
        sx={{
          fontWeight: '600',
          marginBottom: 1,
        }}
      >
        Work {index + 1}
      </Typography>
      <TextField
        type='text'
        name='job-title'
        placeholder='Job Title'
        variant='outlined'
        id='outlined-basic'
        label='Job Title'
        value={workTitle}
        onChange={e => {
          setWorkTitle(e.target.value)
        }}
        sx={{
          marginBottom: 1,
        }}
      />
      <TextField
        type='text'
        name='job-tenure'
        placeholder='Job Tenure'
        variant='outlined'
        id='outlined-basic'
        label='Job Tenure'
        value={workTenure}
        onChange={e => {
          setWorkTenure(e.target.value)
        }}
      />
      <br />
      <TextField
        type='text'
        name='job-location'
        placeholder='Job Location'
        variant='outlined'
        id='outlined-basic'
        label='Job Location'
        value={workLocation}
        onChange={e => {
          setWorkLocation(e.target.value)
        }}
      />
      <br />
      <Typography
        variant='h6'
        sx={{
          fontWeight: '600',
        }}
      >
        Descriptions
      </Typography>

      {workDescriptions.map((description, index) => (
        <Fragment key={index}>
          <textarea
            key={index}
            rows={2}
            placeholder='Description'
            value={description}
            onChange={e => {
              const updatedDescription = [
                ...workDescriptions.slice(0, index),
                e.target.value,
                ...workDescriptions.slice(index + 1),
              ]

              setWorkDescriptions(updatedDescription)
            }}
            style={{
              marginBottom: 2,
            }}
          ></textarea>
          <Button
            variant='outlined'
            color='error'
            onClick={() => {
              const updatedDescriptions = [
                ...descriptions.slice(0, index),
                ...descriptions.slice(index + 1, descriptions.length),
              ]

              setWorkDescriptions(updatedDescriptions)
            }}
            sx={{
              marginBottom: 1,
              marginTop: 1,
              marginLeft: 'auto',
              justifySelf: 'right',
              padding: 0,
            }}
          >
            <DeleteIcon />
          </Button>
        </Fragment>
      ))}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Button
          variant='outlined'
          onClick={() => {
            setWorkDescriptions([...workDescriptions, ''])
          }}
          color='success'
        >
          Add Description
        </Button>
        <Button
          variant='outlined'
          className='save__button'
          color='error'
          onClick={() => {
            removeWorkHistory(index)
          }}
          sx={{ marginLeft: 1 }}
        >
          Remove Work History
        </Button>
        <Button
          variant='outlined'
          sx={{ marginLeft: 1 }}
          onClick={() => {
            saveWorkHistory(workTitle, workTenure, workLocation, workDescriptions)
          }}
        >
          Save Work History
        </Button>
      </Box>
    </Box>
  )
}

export default WorkHistory
