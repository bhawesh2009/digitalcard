import React from 'react'
import IconLink from '../IconLink'
import './style.css'

export default function SocialLinks() {
    return (
        <div className='social-links'>
                    <IconLink
                        link='https://www.facebook.com/joseluis.bravocardenas'
                        iconClass='fab fa-facebook-f'
                    />
                    <IconLink
                        link='https://community-cyber-space.vercel.app/'
                        iconClass='fas fa-globe'
                    />
                    <IconLink link='#' iconClass='fab fa-twitter' />
                    <IconLink link='#' iconClass='fab fa-linkedin-in' />
                </div>
    )
}
