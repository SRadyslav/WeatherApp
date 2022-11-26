import React from 'react'
import no404 from '../../assets/404.png'  
import './styles.css'

type NotFoundProps = {
  text: string
}
export const NotFound = ({text}:NotFoundProps) => {
  return (
    <div className='notFound'>
      <img src={no404} alt='...' />
      <p>Oops, {text}</p>
    </div>
  )
}
