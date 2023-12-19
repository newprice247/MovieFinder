import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { FilmIcon } from '@heroicons/react/24/solid'
import './assets/styles/App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div 
    className="App" >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
