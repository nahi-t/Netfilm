import React, { useEffect } from 'react'
import "./Row.css"
import axios from '../../../Componet/Utils/Axios'

import { useState } from 'react'
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
export default function Row({ title, fetchurl, islargeRow }) {
  const [movies, setMovies] = useState([]); 
  const [trailerUrl,setTrailerUrl]=useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log("nahom", fetchurl);
        const request = await axios.get(fetchurl); // Fix axios request
        console.log(request.data);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchurl]);

  const handlerClik= (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Close trailer if clicked again
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          console.log(url)
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }
        })
        .catch((error) => console.log("Error finding trailer:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  
  return (
    <>
      <div className='row'>
      <h1>{title}</h1>
<div className='row_posters'>
  {movies?.map((movie, index) => (
    <img 
    onClick={()=>handlerClik(movie)}
    key={index} 
    src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path}`} 
    alt={movie.name} 
    className={`row_poster ${islargeRow && "row_posterLarge"}`} 
  />
  ))}
</div>
<div style={{padding:"40px"}}>
  {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}


</div>
      </div>

    </>
  )
}
