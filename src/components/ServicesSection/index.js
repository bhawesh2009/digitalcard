import React, { useState } from 'react'
import Section from '../Section'
import ListOfServices from '../LisOfServices'
import './style.css'

export default function ServicesSection () {
    const [state, setstate] = useState({
        title: 'Alankar Jewelers',
        text: 'We provid all type jewells Itme',
        styles:'services'
    });
    return (
        <Section title={state.title} text={state.text} styles={state.styles}>
            <ListOfServices />
        </Section>
    )
}
