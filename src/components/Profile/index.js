import React from 'react'
import './style.css'
export default function Profile({image,name,degree,flag}) {
    return (
        <div className='profile'>
            <div className='profile-img'>
                <img src={image} alt='profile_img' />
            </div>
            <h1>{name}</h1>
            <h2>{degree}</h2>
            <p>{flag}</p>
        </div>
    )
}
