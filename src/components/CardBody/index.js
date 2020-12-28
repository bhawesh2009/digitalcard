import React from 'react'
import ServicesSection from '../ServicesSection'
import LocationSection from '../LocationSection'
import QRCodeSection from '../QRCodeSection'
import './style.css'

export default function CardBody() {
    return (
        <section className='card-body'>
            <ServicesSection />
            <LocationSection />
            <QRCodeSection />
        </section>
    )
}
