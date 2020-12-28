import React from 'react'
import CardBody from '../CardBody'
import CardFooter from '../CardFooter'
import CardHeader from '../CardHeader'
import './style.css'

export default function Card() {
    return (
        <div className='card'>
            <CardHeader />
            <CardBody />
            <CardFooter />
        </div>
    )
}
