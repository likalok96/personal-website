import './App.css'
import FontPage from './FontPage/FontPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import Content from './Content/Content'
import { AnimatePresence } from 'framer-motion'
import Header from './Header/Header'
import { useEffect } from 'react'
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'
import About from './About/About'


const Router = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        
        <Route path='/' element={<FontPage/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/content/:project' element={<Content/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>


      </Routes>
    </AnimatePresence>
  )
}

export default Router