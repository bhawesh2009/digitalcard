import React from 'react'
import './style.css'

export default function ServiceFront({click,icon,title}) {
    return (
        <div className='service-front' onClick={click}>
            <div className='icon'>
                <i className={icon}></i>
            </div>
            <h4>{title}</h4>
        </div>
    )
}
