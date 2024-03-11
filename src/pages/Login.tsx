import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link as MUILink,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Copyright from '../components/Copyright'
import { useAuth } from '../hooks/use-auth'
import { role as roleEnum } from '../lib/enumerations'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [role, setRole] = useState<roleEnum>(roleEnum.user)

  let navigate = useNavigate()

  const { login } = useAuth()

  const doLogin = async (e: FormEvent) => {
    e.preventDefault()

    await login(email, role === 'admin')

    navigate('/view')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={doLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={password}
            autoComplete='current-password'
            onChange={e => {
              setPassword(e.target.value)
            }}
          />

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Login As</InputLabel>
            <Select
              required
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Login As'
              sx={{ width: '50%' }}
              onChange={e => {
                switch (e.target.value) {
                  case roleEnum.admin: {
                    setRole(roleEnum.admin)

                    break
                  }
                  case roleEnum.user: {
                    setRole(roleEnum.user)

                    break
                  }
                }
              }}
            >
              <MenuItem value={roleEnum.user} selected>
                User
              </MenuItem>
              <MenuItem value={roleEnum.admin}>Admin</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <MUILink href='#' variant='body2'>
                Forgot password?
              </MUILink>
            </Grid>
            <Grid item>
              <MUILink href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </MUILink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default Login
