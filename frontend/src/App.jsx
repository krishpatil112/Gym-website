import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from "./Signup"
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import Login from './Login'

function App() {

  return (
    <BrowserRouter >
     <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Navigate to="/Mainpage.html" />} />
     </Routes>
     </BrowserRouter>
  )
}

export default App

