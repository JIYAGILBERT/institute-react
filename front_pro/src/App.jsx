import { useState } from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from'./Components/html/Home'
import About from'./Components/html/About'
import Course from'./Components/html/Course'
import Contact from'./Components/html/Contact'
import Placement from'./Components/html/Placement'
import Coursedetails from'./Components/html/Coursedetails'

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        
        <Route path='/about' element={<About/>}/>

        <Route path='/course' element={<Course/>}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/placement' element={<Placement/>}/> 

        <Route path='/Coursedetails/:id' element={<Coursedetails/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}


