import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componenets/Home/Home'
import Navbar from './Componenets/Navbar/Navbar'
import Sidebar from './Componenets/Sidebar/Sidebar'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='*' element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
