import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.scss'
import ContentWrapper from '../ContentWrapper/ContentWrapper';

const Contact = () => {

    const [status, setStatus] = useState('')

    const sendEmail = (e:React.FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement

        emailjs.sendForm('service_wzxbn0d', 'template_6ma7cbo', target, 'mulvB6cinVmQQ34kF')
          .then((result) => {
            console.log(result.text);
            setStatus('Email sent success');
        }, (error) => {
            console.log(error.text);
            setStatus(`${error.text} happened`)
        });

        target.reset()
      };

  return (
    <ContentWrapper title='CONTACT' next='HOME'>
    <div className='contact_wrapper'>
        <h1>Send a message</h1>

        <form onSubmit={sendEmail}>
            <div className='row'>
                <input type="text" name='first_name' placeholder='First Name' required/>
                <input type="text" name='last_name' placeholder='Last Name' required/>
            </div>
            <div className='row'>

                <input type="email" name='email' placeholder='Email' required/>
                <input type="phone" name='phone' placeholder='Phone' required/>
            </div>
            <input type="text" name='subject' placeholder='Subject' required/>

            <textarea name="message" rows={7} placeholder='Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            <p>{status}</p>
        </form>
    </div>
    </ContentWrapper>
  )
}

export default Contact