import { useState } from 'react'
import './App.css'
import Base from './pages/Base'
import Home from './pages/Home'
import { Routes, Route} from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer'
import About from './pages/About'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts'

function App() {

  return (
    <>
      {/* <Base>
        <Home />
      </Base> */}
      <Routes>
        <Route path="/" element={<Base />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path='contacts' element={<Contacts /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
