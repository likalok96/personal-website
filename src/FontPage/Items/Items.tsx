import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

interface ItemsProps {
    id: number;
    text: string;
    content: boolean;
  }

const Items = ({ id,text, content}: ItemsProps) => {
    const [click, setClick] = useState<boolean>(false);

    const naviagte = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLElement>)=> {
      e.preventDefault();
      setClick(()=>!click);
      setTimeout(()=>{naviagte(content ? `/content/${text}` : `/${text}`)},0)
    }

  return (
    <div className='items' id={`${id}`} key={id} onClick={handleClick} >

        <div className='items_rotate' key={id}>
        <motion.div
    
    initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     //click ? "rotateY(20deg)" : 
     exit={{ opacity: 0, transform: "rotateY(-75deg) translateZ(100px)",transformOrigin: "right center",perspective:"100vw" }}
     transition={{ duration: 1, ease: "easeInOut",delay: click ? 1 : 0.7 - id % 6  * 0.1 }}
 >
          <a className={!click ? '' : 'isClick'}  href={content ? `/content/${text}` : `/${text}`}>{text}</a>
        </motion.div>
        </div>
    </div>
  )
}

export default Items