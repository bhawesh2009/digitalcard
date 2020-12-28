import React from 'react'
import './style.css'

export default function HeaderBackground({ background, text, subText }) {
    return (
        <div className='header-background'>
            <div className='background-text'>
                <p>{text}</p>
                <span>{subText}</span>
            </div>
            <img src={background} alt='header_background' />
        </div>
    )
}
