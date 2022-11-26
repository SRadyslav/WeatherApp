import React from 'react'
import no404 from '../../assets/404.png'  
import './styles.css'

export const NotFound = () => {
  return (
    <div className='notFound'>
      <img src={no404} alt='...' />
      <p>Oops! Invalid Location :/</p>
    </div>
  )
}
