const BASE_URL ="https://api.themoviedb.org/3/";
const API_KEY_PARAM = `?api_key=${import.meta.env.VITE_API_KEY}`;
const BACKDROP_BASE_URL= "https://images.tmdb.org/t/p/original/"
const POSTER_BASE_URL = "https://images.tmdb.org/t/p/w300/"
const RECOMMENDATIONS = `${BASE_URL}/tv/{series_id}/recommendations`
export {BASE_URL,API_KEY_PARAM,BACKDROP_BASE_URL,POSTER_BASE_URL,RECOMMENDATIONS}