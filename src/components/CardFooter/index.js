import React from 'react'
import './style.css'

export default function CardFooter() {
    return (
        <section className='card-footer'>
            <img
                src='https://media.giphy.com/media/VfjEHoNY0IMAE/giphy.gif'
                alt='footer_img'
            />
            <div className='copyright-text'>
                <p>
                    Copyright 2020 |
                    <a href='#'>
                        SSS Developer
                    </a>
                </p>
            </div>
        </section>
    )
}
