import React from 'react'
import './style.css'

export default function ServiceBack({ click, title, text }) {
    return (
        <div className='service-back' onClick={click}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}
