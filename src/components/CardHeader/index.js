import React from 'react'
import HeaderBackground from '../HeaderBackground'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import Contact from '../Contact'
import profile_img from '../../img/perfil.jpg'
import './style.css'

export default function CardHeader() {
    return (
        <div className='card-header'>
            <HeaderBackground
                background='https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif'
                text='Marble And Granite'
                subText='Delar'
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
