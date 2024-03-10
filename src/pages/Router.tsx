import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/use-auth'
import Login from './Login'
import Root from './Root'
import View from './View'
import Edit from './Edit'

const Router = () => {
  const { authed, logout } = useAuth()
  console.log(authed)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/login' element={<Login />} />
        <Route path='/view' element={<View />} />
        <Route path='/Edit' element={<Edit />} />
      </Routes>
      {authed ? (
        <div className='d-grid mt-5'>
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
          <button className='btn-dark' onClick={() => {}}>
            Sign in
          </button>
        </div>
      )}
    </BrowserRouter>
  )
}

export default Router
