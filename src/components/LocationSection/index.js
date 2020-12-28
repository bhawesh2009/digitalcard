import React, { useState } from 'react'
import Section from '../Section'
import './style.css'

export default function LocationSection() {
    const [state] = useState({
        title: 'MY LOCATION',
        text: 'Marble and Granite',
        styles: 'location'
    })
    return (
        <Section title={state.title} text={state.text} styles={state.styles}>
            <div className='location-box'>
                <div className='box-info'>
                    <i className='fas fa-map-marker-alt'></i>
                    <p>Rajsamand Rajasthan</p>
                </div>
                <div className='box-map'>
                    <iframe
                        title='mapa'
                        className='iframe-map'
                        src='https://www.google.com/maps/d/u/0/embed?mid=1TsS5vCmbqVRHDUTqSkvnTOHTTKvQy09A'
                    ></iframe>
                </div>
            </div>
        </Section>
    )
}
