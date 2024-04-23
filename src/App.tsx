import { useState } from 'react'

import './App.css'
import { BrowserRouter, useLocation } from 'react-router-dom'

import Header from './Header/Header'
import Router from './Router'
import Wrapper from './Wrapper/Wrapper'

function App() {


  return (
    <>
      <BrowserRouter>
        <Wrapper/>
      </BrowserRouter>

      
    </>
  )
}

export default App
