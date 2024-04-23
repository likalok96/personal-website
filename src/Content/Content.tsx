import React, { Children, useEffect, useRef } from 'react'
import './Content.scss'
import { motion, transform, useScroll,useMotionValue, useTransform, easeIn, cubicBezier } from 'framer-motion'

import img from '../assets/f3kmofsn.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
/*
interface montionProps {
    children: React.ReactNode;
}
*/
interface content {
  [index: string]: string | string[];
}
interface contentObj {
  [index: string]: content;
}

const Content = () => {

    const {project} = useParams<{project: string}>()

    const contentObj:contentObj = {
      'WNP SHOP':{
      'title':'WNP SHOP',
      'background': 'url(/f3kmofsn.png)',
      'discription': `WNP SHOP is a clone website from Whiskers N Paws ecommerce website.`,
      'tool': ['React','React Query','CSS','NodeJS','Stripe','JWT','MySQL'],
      'url': 'https://www.wnp-ecom.com/',
      'project_img': '/wnp1.png',
      'next_type':'content',
      'next': 'LOL DRAFT'
      },
      'LOL DRAFT':{
      'title':'LOL DRAFT',
      'background': 'url(/lol_bg.png)',
      'discription': `This project is a League of Legends draft simulator. It provides two modes solo and VS mode.
      You can draft without time limit and order in solo mode and draft with opponent with limited time in VS mode. 
      Data is read and written continuously to achieve communication between players.`,
      'tool': ['React','CSS','Firestore'],
      'url': 'https://likalok96.github.io/lol_draft/',
      'project_img': '/lol1.png',
      'next_type':'resume',
      'next': 'RESUME'
      }
    }

    const  getProject = (project?: string)=> {
      return typeof project !== 'undefined' ? contentObj[project] : {};
  }

  const content = getProject(project)

    const {scrollY,scrollYProgress} = useScroll();

    const Yposition = useTransform(scrollY ,[0,200],[0,20])
    const Yposition2 = useTransform(scrollYProgress ,[0.7,1],[0,20])

    const location = useLocation()

    const navigate = useNavigate()

    const loldraft = {'title':'LOL Draft',
                      'background': 'lol',
                      'discription': `This project is a League of Legends draft simulator. It provides two modes solo and VS mode.
                       You can draft without time limit and order in solo mode and draft with opponent with limited time in VS mode. 
                       Data is read and written continuously to achieve communication between players.`,
                      'tool': ['React','CSS','Firestore'],
                      'url': 'https://',
                      'project_img': ''
    }

    
/*
    const MotionDiv =({children}:montionProps)=>{
        return (
            <motion.div style={{translateY: Yposition}}>
                {children}
            </motion.div>
        )
    }
*/
//exit={{scaleY:0,transformOrigin:'center top'}}
  return (
    <div className='content_container'>
      <section>
        <motion.div style={{translateY: Yposition,background:'transparent',position:'relative',zIndex:2}} exit={{opacity:0}}><h2>{content.title}</h2></motion.div>
      </section>

      <motion.section className={location.pathname==='/content'  ? 'background_image' : 'background_image'} 
      style={{backgroundImage: content.background as string, backgroundPosition:'50% 15%', backgroundSize:'cover',width:'100%',height:'70vh',minHeight:'480px',margin:'10vh 0'}}>

        <motion.div style={{width:'100%',height:'70vh',minHeight:'480px',margin:'10vh 0'}} exit={{scaleY:1,transformOrigin:'center top',transition: { duration: 2 }}}></motion.div>

      </motion.section>

      <section style={{color:'#000'}} className='project_container' >
        <div className='project'>

          <h3>{content.discription}</h3>
          
          <h4>Development Tools</h4>
          <ul>
            {(content.tool && typeof content.tool!=='string') && content.tool.map((item)=><li>{item}</li>)}

          </ul>

          <a href={content.url as string} target='_blank'>Visit Website</a>
        </div>

        <div className='project_image'>
          <img src={content.project_img as string} alt="" />
        </div>

      </section>

      <motion.div className='next' style={{translateY: Yposition2,background:'transparent'}} exit={{opacity:0}} onClick={()=>navigate(content.next_type === 'content' ?`/content/${content.next}`:`/${content.next}`)}><h2>{content.next}</h2></motion.div>

        
    </div>
  )
}

export default Content