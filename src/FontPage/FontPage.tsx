import React, { useState } from 'react'
import "./FontPage.scss"
import Items from './Items/Items'
import { motion } from "framer-motion";


const FontPage = () => {
    const content = ['WNP SHOP','LOL DRAFT','Resume','About','Contact']

    const [scroll, setScroll] = useState<number>(0)

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    window.addEventListener(
        'scroll',
        function handleScroll() {
          const scrollTopPosition =
            window.scrollY || document.documentElement.scrollTop;
      
          if (scrollTopPosition - lastScrollTop > 0 && lastScrollTop<80) {
            setScroll(scrollTopPosition*-1)
            console.log(lastScrollTop );
          } else if (scrollTopPosition - lastScrollTop < 0 && lastScrollTop<80) {
            console.log(lastScrollTop );
            setScroll(scrollTopPosition*-1)
          }
          lastScrollTop =
            scrollTopPosition <= 0 ? 0 : scrollTopPosition;
        },
        false,
      );

  return (

      <div className='container' style={{transform: `translate3d(0px,${scroll<-80 ? -80 : scroll}px,0px)`}}>

          {content.map((text,id)=>

              <Items text={text} id={id} content={content.length-id>3? true : false}/>
              
          )}
      </div>
    
  )
}
//style={{perspectiveOrigin:`50% calc( offsetHeight  / 8vw * 120%);`}
// style={{perspectiveOrigin:`50% calc(${text.length > 5 ? 2 : 2} * 120%)`}}
export default FontPage