import { useState } from 'react'
import './App.css'

function App() {
  const movies = [
    {title: 'двери иных миров', poster:'./movies/двери иных миров.jpg'},
    {title:'королевские каникулы',  poster: './movies/королевские каникулы.jpg'},
    {title: 'альдабра',  poster: './movies/альдабра.jpg'},
    {title: 'лунные приключения',  poster: './movies/лунные приключения.jpg'},
    {title: 'творцы снов',  poster: './movies/творцы снов.jpg'}
  ];

  return (
    <div>
      <h1 style={{width: '700px', marginRight: '10px',textAlign: 'centr' }}>Мои любимые фильмы</h1>
      <ul>
        {
          movies.map((movie,index) =>(
            <li key={index}style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              {movie.title}
              <img src={movie.poster} alt={movie.title} style={{width: '200px',margin:'50px'}}/>
              
            </li>
          ))
        }
      </ul>
    </div>
 
  );
};

export default App
