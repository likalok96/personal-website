import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Router from '../Router';
import { motion } from 'framer-motion';

const Wrapper = () => {

    const location = useLocation();
//#252423
    let background = location.pathname!=='/' ?  '#f2f2f2' : "#4801ff";
    let transition = location.pathname!=='/' ?  "background 1s ease 1.7s" : "background 1s ease 1.7s";

    useEffect(() => {
      if (!location.hash) {
        window.scrollTo(0, 0);

      }

    }, [location]);


  return (
    
    <motion.div style={{background: background , width:"100%", transition: transition,overflow:'visible',minHeight:'100vh'}} exit={{opacity:0,transition: { duration: 2 }}}>
        
        <Router/>
        <Header />
    </motion.div>
  )
}

export default Wrapper