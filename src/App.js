import { useCallback, useEffect, useState} from 'react';
import { debounce } from "lodash"
import './App.css';
import React from 'react';
import { Loading } from './Components/Loading/Loading';
import { MovieList } from './Components/MovieList/MovieList';
import { InputField } from './Components/InputField/InputField';
import {Routes,Route} from "react-router-dom";
import { Header } from './Components/Header/Header';
import {Favourite} from './Components/Favourite/Favourite'

function App() {
  const [title,setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [like, setLike] = useState([]);  
 

  async function getMovie(title) {
      const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${title}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2eb34e91fdmshca7955b698f7c58p1efe9fjsn10d77cf2829e',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result.d) {
          setMovies(result.d);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
  } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deb = useCallback(debounce((text) => {
    setIsLoading(true);
    setTitle(text)
  }, 1000)
  ,[]);
  useEffect(() => {
    
    getMovie(title)
  },[title])
  const handleTitle =(text) =>{
    deb(text);  
  }

  const addTo = (movie) => {
    setLike((m) => [...m,movie])
  }
  const del = (id) => {
    console.log(id);
    setLike((like).filter((l) => id !== l.id))
  }
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
          <InputField handleTitle={handleTitle}/>
          { isLoading ? 
            <Loading/> : 
           <MovieList movie={movies} add={addTo} liked={like} del={del}/>}
          </>
         }/>
        <Route path='/favourite' element={<Favourite like={like} del={del}/>} />
      </Routes> 
    </div>
  );
}

export default App;
