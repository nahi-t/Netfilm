import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://api.themoviedb.org/3", // ✅ Correct TMDb API URL
  
});

export default instance;
