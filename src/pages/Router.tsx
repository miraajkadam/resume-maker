import { HashRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Edit from './Edit'
import Login from './Login'
import Root from './Root'
import View from './View'

const Router = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/login' element={<Login />} />
      <Route path='/view' element={<View />} />
      <Route path='/Edit' element={<Edit />} />
    </Routes>
  </HashRouter>
)

export default Router
