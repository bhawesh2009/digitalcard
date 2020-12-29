import React from 'react'
import HeaderBackground from '../HeaderBackground'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import Contact from '../Contact'
import profile_img from '../../img/jewellery0.jpg'
import './style.css'

export default function CardHeader() {
    return (
        <div className='card-header'>
            <HeaderBackground
                background='https://media.giphy.com/media/VfjEHoNY0IMAE/giphy.gif'
                text='Alankar Jewellers'
                subText='Nathdwara'
            />
            <Profile
                image={profile_img}
                name='Bhawesh'
                degree='Owner'
                flag=''
            />
            <SocialLinks />
            <Contact />
        </div>
    )
}
