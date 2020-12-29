import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import ServiceFront from '../ServiceFront'
import ServiceBack from '../ServiceBack'
import jewellery1 from '../../img/jewellery1.jpg'

export default function ServiceCard({ type, imag }) {
    useEffect(() => {
        handleContent()
    }, [])
    const [service, setService] = useState({
        title: 'Alankar Jewellers',
        icon: 'fas fa-handshake0',
        
        text:
            'we are the group of jewels',
          
            
      
    })

    const handleContent = () => {
        if (type === 'cursos') {
            setService({
                title: 'Alankar Jewellers',
                icon: 'fas fa-chalkboard-teacher',
                text:
                    'all type of jewellery available ',
                imag:{jewellery1},   
                   
            })
        }
        if (type === 'soporte') {
            setService({
                title: 'Alankar Jewellers',
                icon: 'fas fa-tools',
                text:
                    'Please visit our show room one time'
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
                imag={service.imag}
                
            />
        </ReactCardFlip>
    )
}
