import React, { useState } from 'react'
import Section from '../Section'
import ListOfServices from '../LisOfServices'
import './style.css'

export default function ServicesSection () {
    const [state, setstate] = useState({
        title: 'Marble And Granite',
        text: 'We all provide all type marble and grantie',
        styles:'services'
    });
    return (
        <Section title={state.title} text={state.text} styles={state.styles}>
            <ListOfServices />
        </Section>
    )
}
