import React, { Children, useEffect, useRef } from 'react'
import '../Content/Content.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface ContentProps {
    title: string;
    next: string;
    children: React.ReactNode;
}

const ContentWrapper:React.FunctionComponent<ContentProps> = (props) => {

    const {scrollY,scrollYProgress} = useScroll();

    const Yposition = useTransform(scrollY ,[0,200],[0,20])
    const Yposition2 = useTransform(scrollYProgress ,[0.7,1],[0,20])

    const navigate = useNavigate()

  return (
    <div className='content_container'>
      <section>
        <motion.div style={{translateY: Yposition,background:'transparent',position:'relative',zIndex:2}} exit={{opacity:0}}><h2>{props.title}</h2></motion.div>
      </section>
        {props.children}

      <motion.a className='next' style={{translateY: Yposition2,background:'transparent'}} exit={{opacity:0}} href={props.next==='HOME' ? '/' : `/${props.next}`}><h2>{props.next}</h2></motion.a>

        
    </div>
  )
}

export default ContentWrapper