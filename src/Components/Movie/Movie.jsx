import React from 'react'
import './Movie.css';
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";

export  function Movie({movie,add, Liked, del}) {
  const Img = movie.i ? movie.i.imageUrl : '';  

  return (
    <div className='card'>
      <img src={Img} alt="" className='img'/>
      <p className="title">{movie.l}</p> 
      {Liked.includes(movie) ? (
        <button className='btn' onClick={() => del(movie.id)}>{<AiFillHeart className='icon'/>}</button>  
      ):(
        <button className='btn' onClick={() => add(movie)}>{<AiOutlineHeart className='icon'/>}</button>  
      )}        
    </div>
  )
}
