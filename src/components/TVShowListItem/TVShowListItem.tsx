import { TVShow } from '../../config/interfaces';
import { POSTER_BASE_URL } from '../../config/constants';

interface ItemProps {
  tvShow: TVShow | null;
  onItemClick: (tvShow: TVShow) => void;
}

export function TVShowListItem({ tvShow, onItemClick }: ItemProps) {
  return (
    <div className='text-white'>
      {tvShow ? (
        <div
          className='w-64 h-full  relative cursor-pointer ' 
          onClick={() => onItemClick(tvShow)}
        >
            {tvShow.backdrop_path ?
            <img
            src={POSTER_BASE_URL + tvShow.backdrop_path}
            alt={tvShow.name}
            className='rounded-md select-none pointer-events-none' 
          /> : <div className='h-full bg-gray-500'></div>
         }
          
          <p className="w-full absolute bottom-0 p-2 h-8 text-sm bg-black bg-opacity-60 overflow-ellipsis whitespace-nowrap overflow-hidden select-none">
            {tvShow.name} 
          </p>
        </div>
      ) : (
        <div>No TV Show selected</div>
      )}
    </div>
  );
}
