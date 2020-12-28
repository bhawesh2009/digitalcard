import React, { useState } from 'react'
import './style.css'
import whatsapp from '../../img/whatsapp.svg'
import messenger from '../../img/messenger.svg'
import email from '../../img/email.svg'
import arrow_right from '../../img/arrow_right.svg'
import arrow_top from '../../img/arrow_top.svg'

export default function Contact() {
  const [state, setstate] = useState(false)
  const handleClick = () => {
    setstate(!state)
  }
  return (
    <>
      <div className='contact'>
        <button
          onClick={handleClick}
          className={state ? 'contact-btn active' : 'contact-btn'}
        >
          <span>Contact To Me</span>
          <img src={arrow_top} alt='arrow top' />
        </button>

        <div className={state ? 'contact-title active' : 'contact-title'}>
          <p>Contac Information</p>
        </div>
      </div>

      <div className={state ? 'contact-list active' : 'contact-list'}>
        <a
          href='https://api.whatsapp.com/send?phone=918306884064&text=Hola%20estoy%20interesado%20en%20el%20servicio%20que%20ofreces,%20deseo%20mas%20información'
          className='whatsapp'
          target='_blank'
          rel='noreferrer'
        >
          <div className='icon'>
            <img src={whatsapp} alt='whatsapp logo' />
          </div>

          <div className='content'>
            <h1>Whatsapp</h1>
            <span>(+91)8306884964</span>
          </div>

          <img className='arrow' src={arrow_right} alt='arrow right' />
        </a>

        <a
          href='#'
          className='messenger'
          target='_blank'
          rel='noreferrer'
        >
          <div className='icon'>
            <img src={messenger} alt='messenger logo' />
          </div>

          <div className='content'>
            <h1>Messenger</h1>
            <span>bhawesh Paliwal</span>
          </div>

          <img className='arrow' src={arrow_right} alt='arrow right' />
        </a>

        <a
          href='mailto:vedpaliwal4@gmail.com?subject=Contacto%20Digital&body=Hola%20estoy%20interesado%20en%20el%20servicio%20que%20ofreces.%20Deseo%20mas%20información'
          className='gmail'
        >
          <div className='icon'>
            <img src={email} alt='email logo' />
          </div>

          <div className='content'>
            <h1>Email</h1>
            <span>bhaweshpaliwal3030@gmail.com</span>
          </div>
          <img className='arrow' src={arrow_right} alt='arrow right' />
        </a>
      </div>
    </>
  )
}
