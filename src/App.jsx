import React, {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Rating from './components/Rating'
import { useDispatch } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.min.css'





function App() {
  const dispatch = useDispatch();

  return (
    <main className='container vh-100'>
      
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/rating/:id' element={<Rating/>} />
        </Routes>
        <Footer />
      
    </main>
  )
}

export default App
