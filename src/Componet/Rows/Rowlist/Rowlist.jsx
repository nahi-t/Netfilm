import React from 'react'
import "./Rowlist.css"
import Row from "../Row/Row"
import requests from '../../Utils/Requ'

export default function Rowlist() {
  return (
    <div>
        <Row
       title="NEITFLIX ORIGINALS"
       fetchurl={requests.fetchNetflixOriginals}
       islargeRow={true}
       />
       <Row
        title="Trending Now"
        fetchurl={ requests.fetchTrending}
       
       />
       <Row
        title="TOP RATED MOVIE"
        fetchurl={ requests.fetchTopRatedMovies}
      
       />
       <Row
       
       title="Action MOVIE"
       fetchurl={ requests.fetchActionMovies}
       />
       <Row
         title="Comedy Movie"
         fetchurl={requests.fetchComedyMovies}
        />
       <Row
         title="Horror Movie"
         fetchurl={ requests.fetchHorrorMovies}
         />
       <Row
         title="Romance Movie"
         fetchurl={ requests.fetchRomanceMovies}/>
         <Row
         title="Documentries"
         fetchurl={ requests.fetchDocumentaries }/>
         <Row
         title="TV Show"
         fetchurl={ requests.fetchTVShows}/>
      
    </div>
  )
}
