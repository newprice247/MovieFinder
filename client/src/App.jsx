import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { FilmIcon } from '@heroicons/react/24/solid'
import './assets/styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <FilmIcon className="App-logo" alt="logo" />
        <p>
          Movie Finder
        </p>
        <p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          {' '}
          Clicked {count} times
        </p>
      </header>
      <Outlet />
    </div>
  )
}

export default App
