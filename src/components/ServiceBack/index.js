import React from 'react'
import './style.css'
import jewellery1 from '../../img/jewellery1.jpg'
import jewellery2 from '../../img/jewellery2.jpg'
import jewellery3 from '../../img/jewellery3.jpg'
import jewellery4 from '../../img/jewellery4.jpg'
import jewellery5 from '../../img/jewellery5.jpg'
import jewellery6 from '../../img/jewellery6.jpg'


export default function ServiceBack({ click, title, text,imag }) {
    
     
   imag = [jewellery1,jewellery2,jewellery3,jewellery4,jewellery5,jewellery6


   ]
   
    
    
    
    return (
        <div className='service-back' onClick={click}>
            <h4>{title}</h4>
            <p>{text}</p>
            <img src={imag[4]}></img>
          </div>
    
    )
}
