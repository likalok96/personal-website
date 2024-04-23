import React, { useState } from 'react'
import './Resume.scss'
import ContentWrapper from '../ContentWrapper/ContentWrapper'

const Resume = () => {
    

  return (
    <ContentWrapper title='RESUME' next='ABOUT'>
    <div className='resume_container'>
        
        <div className='intro'>
            <section>
                <h1>Li Ka Lok</h1>
                <p>I worked as a data analyst for a year in 2022. Since then,
                    I have assisted my mom to take care of my nephew and learnt web development & CS concepts like data structure and algorithms.</p>
            </section>
            <section className='contact'>
                <h6>9149 8950</h6>
                <h6>likalok96@gmail.com</h6>
                <h6><a href="">personal website</a></h6>
                <h6><a href="https://github.com/likalok96" target='_blank'>github</a></h6>
            </section>
        </div>


        <div className='resume'>
            <div>
                <section className='experience'>
                    <h3>Experience</h3>
                    <div>
                        <h4>DataTech.ai - <span>Data Analyst</span></h4>
                        <h5>Oct 2021 - Oct 2022</h5>
                        <ul>
                            <li>Built dashboard using Tableau and Python</li>
                            <li>Used data model to calculate customer churn probability</li>
                            <li>Assisted in data preparation and cleaning for building ML models</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Legal Aid Department - <span>Statistical Assistant</span></h4>
                        <h5>Noc 2019 - Nov 2020</h5>
                        <ul>
                            <li>Assisted in data preparation and entry</li>
                            <li>Assisted in data analysis and provide information needed for reporting</li>
                        </ul>
                    </div>
                    
                </section>

                <section className='education'>
                    <h3>Education</h3>

                    <div>
                        <h4>The Open University of Hong Kong <br /><span>Bachelor of Science with Honors in Statistical Analysis and Data Science</span></h4>
                        <h5>Sep 2017 - Jul 2019</h5>
                    </div>

                    <div>
                        <h4>The Hong Kong Polytechnic University <br /><span>HD in Applied Physics</span></h4>
                        <h5>Sep 2014 - Jul 2017</h5>
                    </div>

                </section>

                <section className='project_res'>
                    <h3>Project</h3>
                    <div>
                        <h4>WNP Shop — <a href="https://www.wnp-ecom.com/" target='_blank'>wnp-ecom.com</a></h4>
                        <h5>WNP SHOP is a clone website from Whiskers N Paws ecommerce website.
                              Frontend is built with React. Backend is built with Nodejs, Express, MySQL,
                               JWT for authentication and Stripe for payment.</h5>
                    </div>

                    <div>
                        <h4>LOL Draft — <a href="https://likalok96.github.io/lol_draft/" target='_blank'>likalok96.github.io/lol_draft</a></h4>
                        <h5>LOL Draft is a LoL draft simulator. It is built with React and Firestore.</h5>
                    </div>

                </section>
            </div>
            <div>


                <section>
                    <h3>Availability</h3>
                    <h5>Immediate available</h5>
                </section>

                <section>
                    <h3>Expected Salary</h3>
                    <h5>$ 18,000 - 20,000</h5>
                </section>


                <section>
                    <h3>Skills</h3>
                    <h5>HTML</h5>
                    <h5>CSS</h5>
                    <h5>JavaScript</h5>
                    <h5>React</h5>
                    <h5>Nodejs</h5>
                    <h5>Python</h5>
                    <h5>SQL</h5>
                    <h5>Git</h5>
                </section>

                <section>
                    <h3>Languages</h3>
                    <h5>Cantonese</h5>
                    <h5>English</h5>
                </section>

            </div>
        </div>

    </div>
    </ContentWrapper>
  )
}

export default Resume