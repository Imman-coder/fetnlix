import React, { useState,useEffect } from 'react'
import axios from './axios'
import './Row.css'

const base_url = "http://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,is_large}) {

    const [movies,setMovies] = useState([])
    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl)
        .then((request) => {
            setMovies(request.data.results);
            return request;
        })
        .catch(error =>{
            console.log(error.response)
        })
      }
      fetchData();
    },[fetchUrl])

    // console.table(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img key={movie.id} 
                    className={`row_poster ${is_large && "row_posterLarge"}`}
                    src={`${base_url}${is_large?movie.poster_path:movie.backdrop_path}`} 
                    alt={`movie.alt`} />
                ))}
            </div>
        </div>
    )
}

export default Row;