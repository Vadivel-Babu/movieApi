import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='head'>
        <Link className='title' to='/'>searchAndSaveYourFavourite</Link>
        <Link to='/favourite'>Favourites</Link>
    </div>
  )
}
