import s from './style.module.css'
import { TVShow } from "../../config/interfaces"
import { TVShowListItem } from "../TVShowListItem/TVShowListItem"
export function TVShowList({ tvShowList, onClickItem }: { 
    tvShowList: TVShow[] | null; 
    onClickItem: (tvShow: TVShow) => void; // Typage de la fonction onClickItem
  }) {
    return (
        <>
          {tvShowList ? (
           <div className= {`overflow-x-hidden ${s.overlay}`}>
             <h3 className="text-white text-3xl mb-4">You may also Like:</h3>
            <div className="flex gap-4 ">
                {tvShowList.map((tvShow) => {
                    return <TVShowListItem tvShow={tvShow} onItemClick={onClickItem} key={tvShow.id} />
                })}
            </div>
           </div>
          ) : (
            <div>No TV Show selected</div>
          )}
        </>
      );
}