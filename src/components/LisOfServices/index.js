import React from 'react'
import ServiceCard from '../ServiceCard'
import './style.css'

export default function ListOfServices() {
  return (
    <div className='list-of-services'>
      <ServiceCard />
      <ServiceCard type='cursos' />
      <ServiceCard type='soporte' />
    </div>
  )
}
