import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import HomeIntro from './components/Main/HomeIntro'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeIntro />
    </div>
  )
}

export default App
