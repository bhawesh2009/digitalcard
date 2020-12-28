import React from 'react'
import './style.css'


export default function Section ({styles,title,text,children}) {
    return (
            <div className={`${styles} section`}>
                <h3 className='title-section'>{title}</h3>
                <p className='text-section'>{text}</p>
                {children}
            </div>
    )
}
