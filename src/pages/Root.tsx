import { Link, Navigate } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import { useAuth } from '../hooks/use-auth'

const Root = () => {
  const { authed } = useAuth()

  return (
    <Fragment>
      {authed && <Navigate to='/view' replace={true} />}

      <h1>Welcome to Realtime Chat Application</h1>

      <h2>Please login to continue</h2>

      <Link to='/login'>Login</Link>
    </Fragment>
  )
}

export default Root
