import { TVShow } from '../../config/interfaces'
import {Rating} from './../Rating/Rating.tsx'

export function TVShowDetails({tvShow,mode}:{tvShow:TVShow | null,mode:string}) { 
    const rating: number = tvShow ? tvShow.vote_average / 2 : 0;
    return (
        <div className='text-white'>
          {tvShow ? (
            <div className='w-full md:w-3/4 lg:w-2/4'>
                <h2 className="text-5xl mb-3">{mode === "tv" ? tvShow.name : tvShow.title}</h2>
                <Rating rating={rating} ratingCount={tvShow.vote_count} />
                <p className='text-base mt-3'>{tvShow.overview}</p>
            </div>
          ) : (
            <div>No TV Show selected</div>
          )}
        </div>
      );
}