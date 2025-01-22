export  interface TVShow {
  id:number;
  name: string,
  title: string,
  backdrop_path: string;
  vote_average:number;
  vote_count:number;
  overview:string;
  poster_path:string;
  genre_ids:number[]
}

export interface Logo{
  image:string
  title:string,
  subtitles:string
}