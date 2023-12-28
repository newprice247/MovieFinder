import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FilmIcon } from '@heroicons/react/24/solid'
import './assets/styles/App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import useDarkSide from './hooks/useDarkSide.jsx'
import { ThemeProvider } from '@material-tailwind/react'


function App() {
  const [colorTheme, setTheme] = useDarkSide()
  const [myTheme, setMyTheme] = useState(colorTheme)
  
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App" >
        <Outlet />
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
