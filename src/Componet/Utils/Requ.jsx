const apiKey = import.meta.env.VITE_API_KEY;
//  const   baseURL="https://api.themoviedb.org/3";

console.log("API Key (Initial)nak:", apiKey); // Check initial value

const requests = {}; // Initialize requests object

if (apiKey) { // Check if apiKey is loaded
  requests.fetchTrending = `/trending/all/week?api_key=${apiKey}&language=en-US`;
  requests.fetchNetflixOriginals = `/discover/tv?api_key=${apiKey}&with_networks=213`;
  requests.fetchTopRatedMovies = `/movie/top_rated?api_key=${apiKey}&language=en-US`;
  requests.fetchActionMovies = `/discover/movie?api_key=${apiKey}&with_genres=28`;
  requests.fetchComedyMovies = `/discover/movie?api_key=${apiKey}&with_genres=35`;
  requests.fetchHorrorMovies = `/discover/movie?api_key=${apiKey}&with_genres=27`;
  requests.fetchRomanceMovies = `/discover/movie?api_key=${apiKey}&with_genres=10749`;
  requests.fetchDocumentaries = `/discover/movie?api_key=${apiKey}&with_genres=99`;
  requests.fetchTVShows = `/tv/popular?api_key=${apiKey}&language=en-US&page=1`;

  console.log("API Key (Used in Requests):", apiKey); // Log when used

} else {
  console.error("API Key is not loaded. Check your .env file.");
  // Handle the case where the API key is not available, e.g., display a message to the user.
}


export default requests;
