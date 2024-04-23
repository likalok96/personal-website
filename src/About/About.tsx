import React from 'react'
import './About.scss'
import ContentWrapper from '../ContentWrapper/ContentWrapper'

const About = () => {
  return (
    <ContentWrapper title='ABOUT' next='CONTACT'>
    <div className='about_wrapper'>
        <p>
            I worked as a data analyst for a year in 2022.
            I analysised data for ecommerce, built dashboard and create categorty tag for marketing team in python.
            I used to build dashboard using tabluae and Google Data Studio but in the last project we transfer to streamlit in python for more complicated filter.
            Also, I used data model and machine learning to predict customer churn probability and catergorize customers.
        </p>
        <p>
            Since then, I have assisted my mom to take care of my nephew and learnt web development at the same time.
            I started at freecodecamp for web development and after learning react.
            I started coding a lol draft simulator and a ecommerce website learning about backend with Nodejs.
        </p>
        
        <p> 
            I am still learning CS concepts like data structure and algorithms, CI/CD and more.
            Hopefully, I can become a junior web developer and get more real project practice.
        </p>

    </div>
    </ContentWrapper>
  )
}

export default About