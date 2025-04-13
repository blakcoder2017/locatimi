import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Rating from './components/Rating'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container'>
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
