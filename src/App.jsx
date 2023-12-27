import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Error from './Components/Error'
import Closed from './Components/Closed'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Contact from './Components/Contact'
export default function App() {
  const [res , setRes]= useState()
  useEffect(()=>{
    axios.get('http://localhost:3000/').then(res=>setRes(res.status)).catch(err=>console.log(err));

  }, [])
  console.log(res==null)
  return (
    <div>
      
        {res =="200" ?(
          <div>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Hero/>}></Route>
              <Route path='*' element={<Error/>}></Route>
              <Route path='/services' element={<Services/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
            <Footer></Footer>
          </div>
        ) : (
          <div>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Closed/>}></Route>
            </Routes>
            <div>
              
            </div>
          </div>
        )}
    </div>
  )
}
