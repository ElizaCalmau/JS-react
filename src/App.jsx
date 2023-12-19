
import './App.css'
import { useState } from 'react'

const apiKey = '499adc143510099427a185e36cd48fb2'

function App() {
  const [movies, setMovies] = useState([])
  const onTopRated = () => {
      fetch( `https://api.themoviedb.org/3/movie/top_rated?api-key=${apiKey}`)
        .then( res => res.json())
        .then( data => setMovies(data.results))
  }
    
    const onPopular = () => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then (data => setMovies(data.results))
    }

    const onUpcoming = () => {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(res => res.json())
      .then (data => setMovies(data.results))
    }

  return (
    <>
    <div>
      <button onClick={onPopular}>Popular</button>
      <button onClick={onTopRated}>Top rated</button>
      <button onClick={onUpcoming}>Upcoming</button>
      {movies.map((movie) => 
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        </div>)}
    </div>
    </>
  )
      }
export default App
