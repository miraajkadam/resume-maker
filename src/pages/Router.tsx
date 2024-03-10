import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Fragment } from 'react/jsx-runtime'
import Edit from './Edit'
import Login from './Login'
import Navbar from '../components/Navbar'
import Root from './Root'
import View from './View'

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' element={<Login />} />
          <Route path='/view' element={<View />} />
          <Route path='/Edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default Router
