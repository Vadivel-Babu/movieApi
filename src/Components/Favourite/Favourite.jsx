import React from 'react'
import { AiFillHeart } from "react-icons/ai";

export const Favourite = ({like,del}) => {
  return (
    <div className="grid">
      {!like.length && <h1 className='title'>addYourFavourite</h1>}
      {like.map((l) => {
        return (<div className='card'>
          <img src={l.i ? l.i.imageUrl : ''} alt="" className='img'/>
          <p className="title">{l.l}</p> 
          <button className='btn' onClick={() => del(l.id)}>{<AiFillHeart className='icon'/>}</button>          
         </div>)
      })}

      
    </div>
  )
}
