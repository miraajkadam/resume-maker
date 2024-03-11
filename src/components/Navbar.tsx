import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/use-auth'

const Navbar = () => {
  const { authed, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <Fragment>
      {authed ? (
        <div className='d-grid mt-5'>
          <button
            className='btn-danger'
            onClick={() => {
              navigate('/edit')
            }}
          >
            Edit Resume
          </button>
          <button
            className='btn-danger'
            onClick={() => {
              navigate('/view')
            }}
          >
            View Resume
          </button>
          <button
            className='btn-danger'
            onClick={() => {
              logout()
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className='d-grid mt-5'>
          <button
            className='btn-dark'
            onClick={() => {
              navigate('/login')
            }}
          >
            Sign in
          </button>
        </div>
      )}
    </Fragment>
  )
}

export default Navbar
