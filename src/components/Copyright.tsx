import { Link, Typography } from '@mui/material'

const Copyright = (props: any) => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://www.miraajkadam.com/'>
        www.miraajkadam.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
