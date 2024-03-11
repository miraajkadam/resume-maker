import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const Education = ({
  degree: eduDegree,
  university: eduUniversity,
  location: eduLocation,
  year: eduYear,
  saveEducation,
  removeEducation,
  index,
}: {
  university: string
  degree: string
  location: string
  year: string
  index: number
  saveEducation: (degree: string, university: string, location: string, year: string) => void
  removeEducation: (removalIndex: number) => void
}) => {
  const [degree, setDegree] = useState<string>(eduDegree)
  const [university, setUniversity] = useState<string>(eduUniversity)
  const [location, setLocation] = useState<string>(eduLocation)
  const [year, setYear] = useState<string>(eduYear)

  return (
    <Box sx={{ margin: '20px 0', display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant='h5'
        sx={{
          fontWeight: '600',
          marginBottom: 1,
        }}
      >
        Education {index + 1}
      </Typography>
      <TextField
        type='text'
        name='education-degree'
        placeholder='Education Degree'
        value={degree}
        variant='outlined'
        id='outlined-basic'
        label='Education Degree'
        onChange={e => {
          setDegree(e.target.value)
        }}
        sx={{
          marginBottom: 1,
        }}
      />
      <TextField
        type='text'
        name='education-year'
        placeholder='Education Year'
        variant='outlined'
        id='outlined-basic'
        label='Education Year'
        value={year}
        onChange={e => {
          setYear(e.target.value)
        }}
        sx={{
          marginBottom: 1,
        }}
      />
      <TextField
        type='text'
        name='education-university'
        placeholder='Education University'
        value={university}
        variant='outlined'
        id='outlined-basic'
        label='Education University'
        onChange={e => {
          setUniversity(e.target.value)
        }}
        sx={{
          marginBottom: 1,
        }}
      />
      <TextField
        type='text'
        name='education-location'
        placeholder='Education Location'
        value={location}
        onChange={e => {
          setLocation(e.target.value)
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 1,
        }}
      >
        <Button
          variant='outlined'
          onClick={() => {
            removeEducation(index)
          }}
          color='error'
          sx={{
            marginRight: 1,
          }}
        >
          Remove Education
        </Button>
        <Button
          variant='outlined'
          color='success'
          onClick={() => {
            saveEducation(degree, university, location, year)
          }}
        >
          Save Education
        </Button>
      </Box>
    </Box>
  )
}

export default Education
