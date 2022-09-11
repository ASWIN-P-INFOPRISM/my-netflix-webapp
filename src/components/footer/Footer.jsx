import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const navigate = useNavigate()
  return (
    <div className='footer'>
        <small className='options' onClick={()=>navigate('/')}>Home</small>
        <small className='options' onClick={()=>navigate('/viewAll/originals')}>Originals</small>
        <small className='options' onClick={()=>navigate('/viewAll/trending')}>Trending</small>
        <small className='options' onClick={()=>navigate('/viewAll/popular')}>Popular</small>
        <small className='options' onClick={()=>navigate('/contact')}>Contact us</small><br/>
        <small className='copyright'>© 2022 Copyright: </small><small>All rights reserved. Designed by </small>
        <small className='developer'>ASWIN</small>
    </div>
  )
}

export default Footer
