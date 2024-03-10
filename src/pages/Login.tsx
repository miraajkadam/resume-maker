import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { role as roleEnum } from '../lib/enumerations'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [role, setRole] = useState<roleEnum>(roleEnum.user)

  let navigate = useNavigate()

  const { login } = useAuth()

  const doLogin = async () => {
    await login(email, role === 'admin')

    navigate('/view')
  }

  return (
    <Fragment>
      <h1>Enter your credentials</h1>

      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <label htmlFor='email'>Enter email: </label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <br />
        <label htmlFor='Role'>Enter Password: </label>
        <input
          type='text'
          name='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <select
          name='role'
          id='role'
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
          <option value={roleEnum.user} selected>
            User
          </option>
          <option value={roleEnum.admin}>Admin</option>
        </select>
        <br />
        <input type='submit' value='Login' onClick={doLogin} />
      </form>
    </Fragment>
  )
}

export default Login
