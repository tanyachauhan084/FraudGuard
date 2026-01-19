
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signin from './Frontend_fg/components/Signin.jsx'
import Signup from './Frontend_fg/components/Signup.jsx'

const Router= createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Signin/>}/>
    <Route path='/signin' element= {<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
)
