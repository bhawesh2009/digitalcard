import React from 'react'
import './style.css'

export default function IconLink({ link, iconClass }) {
    return (
        <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='icon-link'
        >
            <i className={iconClass}></i>
        </a>
    )
}
