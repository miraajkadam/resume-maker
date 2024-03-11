import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const WorkHistory = ({
  descriptions,
  location,
  tenure,
  title,
  saveWorkHistory,
  index,
}: {
  descriptions: string[]
  title: string
  tenure: string
  location: string
  index: number
  saveWorkHistory: (title: string, tenure: string, location: string, descriptions: string[]) => void
}) => {
  const [workDescriptions, setWorkDescriptions] = useState<string[]>(descriptions)
  const [workTitle, setWorkTitle] = useState<string>(title)
  const [workTenure, setWorkTenure] = useState<string>(tenure)
  const [workLocation, setWorkLocation] = useState<string>(location)

  return (
    <Box sx={{ margin: '20px 0', display: 'flex', flexDirection: 'column' }}>
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
        <textarea
          key={index}
          rows={2}
          placeholder='Description'
          value={workDescriptions[index]}
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
          sx={{ marginLeft: 1, marginRight: 1 }}
        >
          Add Description
        </Button>
        <Button
          variant='outlined'
          onClick={() => {
            saveWorkHistory(workTitle, workTenure, workLocation, workDescriptions)
          }}
          sx={{ marginLeft: 1, marginRight: 1 }}
        >
          Save Work History
        </Button>
      </Box>
    </Box>
  )
}

export default WorkHistory
