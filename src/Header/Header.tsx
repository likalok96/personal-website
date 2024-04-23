import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation();

    const {scrollYProgress} = useScroll();
    const textColor = useTransform(scrollYProgress ,[0,0.2,0.95,1],['rgba(0,0,0,1)','rgba(0,0,0,0.3)','rgba(0,0,0,0.3)','rgba(0,0,0,1)']);
    const opacity = useTransform(scrollYProgress ,[0,0.2,0.95,1],[1,0.3,0.3,1]);
    //const background = useTransform(scrollYProgress ,[0,0.2,0.95,1],['inherit','transparent','transparent','inherit']);

    //const display = useTransform(scrollYProgress ,[0,0.2,0.95,1],['block','none','none','block']);

    const [display, setDisplay] = useState<string>('flex')


    window.addEventListener(
        'scroll',
        function handleScroll() {
          let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
          let height = window.innerHeight;
          let bottom = document.documentElement.getBoundingClientRect().bottom;
          
          if(lastScrollTop >=100){
            setDisplay('none')
          }else{
            setDisplay('flex')
          }
          if(bottom <= height+1){
            setDisplay('flex')
          }

        },
        false,
      );



    const Ypostion = useTransform(scrollYProgress ,[0,0.95,1],['-80vh','-80vh','0vh']);

    let topNav = true;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if(latest===1)  topNav = false;
      console.log(topNav)

    })

//style={{color:(location.pathname==='/content') ? textColor : 'rgba(255,255,255,1)'}}
  return (
    <motion.header className={location.pathname!=='/'? 'header' :'header'} >
    <motion.div className={(location.pathname!=='/') ? 'name topNav' : 'name bottomNav'} style={{translateY:(location.pathname!=='/') ? Ypostion:'0vh',color:(location.pathname!=='/') ? textColor : '#fff'}}>
    <Link to="/" >
      <motion.p style={{opacity: opacity }}>Peter Li</motion.p>
    </Link>
    </motion.div>
    

    <motion.div style={{display: display }} className={location.pathname!=='/' ? 'info blackInfo' : 'info whiteInfo'}>

      <div className='contact'>

        <ul>
          <li>Web Developer</li>
        </ul>

        <ul>
          <li>likalok96@gmail.com</li>
          <li>+852 9149 8950</li>
        </ul>

      </div>

      <div className='social'>
      
        <ul>
          <li><Link to="https://github.com/likalok96" target='_blank'>git</Link></li>
          <li></li>
        </ul>
      
      </div>

    </motion.div >
  </motion.header>
  )
}

export default Header