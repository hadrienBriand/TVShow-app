export  interface TVShow {
  id:number;
  name: string,
  backdrop_path: string;
  vote_average:number;
  overview:string;
  poster_path:string;
  vote_count:number;
  genre_ids:number[]
}

export interface Logo{
  image:string
  title:string,
  subtitles:string
}