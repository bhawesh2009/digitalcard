import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import ServiceFront from '../ServiceFront'
import ServiceBack from '../ServiceBack'

export default function ServiceCard({ type }) {
    useEffect(() => {
        handleContent()
    }, [])
    const [service, setService] = useState({
        title: 'Bhawesh paliwal',
        icon: 'fas fa-handshake',
        text:
            'Hello my name is Bhawesh Paliwal and How r you'
    })

    const handleContent = () => {
        if (type === 'cursos') {
            setService({
                title: 'Bhawesh Paliwal',
                icon: 'fas fa-chalkboard-teacher',
                text:
                    'I am delar of marble and granite '
            })
        }
        if (type === 'soporte') {
            setService({
                title: 'Main Delar of marble and granite',
                icon: 'fas fa-tools',
                text:
                    'All type marble and granite is avalible'
            })
        }
    }
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <ServiceFront
                click={handleClick}
                title={service.title}
                icon={service.icon}
            />
            <ServiceBack
                click={handleClick}
                title={service.title}
                text={service.text}
            />
        </ReactCardFlip>
    )
}
