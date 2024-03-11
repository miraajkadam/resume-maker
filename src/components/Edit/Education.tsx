import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const Education = ({
  degree: eduDegree,
  university: eduUniversity,
  location: eduLocation,
  year: eduYear,
  saveEducation,
  index,
}: {
  university: string
  degree: string
  location: string
  year: string
  index: number
  saveEducation: (degree: string, university: string, location: string, year: string) => void
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
        Work {index + 1}
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
      <Button
        variant='outlined'
        onClick={() => {
          saveEducation(degree, university, location, year)
        }}
        sx={{
          marginTop: 1,
          marginLeft: 'auto',
          justifySelf: 'right',
        }}
      >
        Save Education
      </Button>
    </Box>
  )
}

export default Education
