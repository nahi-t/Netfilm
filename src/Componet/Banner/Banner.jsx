import React, { useEffect, useState } from 'react';
import Axios from '../Utils/Axios'; // Ensure axios is configured properly
import requests from '../Utils/Requ'; 
import"./banner.css"




export default function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await Axios.get(requests.fetchNetflixOriginals);
        console.log("API URL:", requests.fetchNetflixOriginals);

        const data = response.data;

        if (data.results && data.results.length > 0) {
          setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
        }
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    };

    fetchMovie();
  }, []);
  const truncate = (string, n) => (string?.length > n ? string.substring(0, n) + "..." : string);


  return (
    <div className="banner" style={{
      backgroundSize: 'cover',
      backgroundImage: movie?.backdrop_path
      ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      : "none",
    
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="banner_content">

        <div className="banner_buttons">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
       
          <button className="button_play">Play</button>
        <button className="button_list">My List</button>
      
     
        
      <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
     
      </div>
      <div className='banner_fadeBottom'></div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import requests from '../../Componet/Utils/Requ'; // Import your requests

// export default function Banner() {
// //   const [movie, setMovie] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true); // Add a loading state

// //   useEffect(() => {
// //     async function fetchData() {
// //       setLoading(true); // Set loading to true before fetching
// //       setError(null);    // Clear any previous errors
// //       try {
// //         const request = `https://api.themoviedb.org/3/discover/tv?api_key=23bd560db2acbee915204e618821fa42&with_networks=213`;
// //         console.log("API URL:", requests.fetchNetflixOriginals);

// //         if (request.data && request.data.results && Array.isArray(request.data.results) && request.data.results.length > 0) {
// //           const randomIndex = Math.floor(Math.random() * request.data.results.length);
// //           setMovie(request.data.results[randomIndex]);
// //         } else {
// //           console.warn("No movie data received or data is in incorrect format:", request.data);
// //           setError("No movie data available.");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching banner movie:", error);
// //         setError("Error fetching movie data. Please try again later.");
// //       } finally {
// //         setLoading(false); // Set loading to false after fetch, regardless of success/failure
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   const truncate = (str, n) => (str?.length > n ? str.substr(0, n - 1) + "..." : str);

// //   if (loading) {
// //     return <div className="banner-loading">Loading Banner...</div>; // Or a more styled loading indicator
// //   }

// //   if (error) {
// //     return <div className="banner-error">{error}</div>; // Display error message
// //   }

// //   if (!movie) { // Handle the case where movie is still null after loading (less likely now, but good to have)
// //     return <div className="banner-no-movie">No movie to display.</div>; // Provide a message or placeholder
// //   }
//   // console.log("API URL:", requests.fetchNetflixOriginals); // Add this line
//   // const request = await axios.get(requests.fetchNetflixOriginals);
//   return (
//     <div className="banner" style={{
//       backgroundSize: 'cover',
//       backgroundImage: `url(https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg)`,
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}>
//       <div className="banner_content">
//         {/* <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1> */}
//         <div className="banner_buttons">
//           <button className="button_play">Play</button>
//           <button className="button_list">My List</button>
//         </div>
//         {/* <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> */}
//       </div>
//     </div>
//   );
// }