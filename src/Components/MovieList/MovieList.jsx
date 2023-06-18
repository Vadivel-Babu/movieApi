import React from 'react'
import { Movie } from '../Movie/Movie'
import './MovieList.css';

export function MovieList({movie,add,liked, del}) {

  return (
    <div className='container'>
      <div className="grid">
        
      {movie.map((m) => <Movie key={m.id} movie={m} add={add} Liked={liked} del={del}/>)}
      </div>
    </div>
  )
}

