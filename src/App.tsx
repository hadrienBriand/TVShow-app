import './App.css'
import s from './style.module.css'
import { TVShowAPI } from './api/tv-show'
import { useEffect, useState } from 'react'
import { BACKDROP_BASE_URL } from './config/constants'
import {TVShow} from  './config/interfaces'
import { TVShowDetails } from './components/TVShowDetails/TVShowDetails'
import { Logo } from './components/Logo/Logo'
import logo from './assets/images/logo.png'
import { TVShowList } from './components/TVShowList/TVShowList'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Modale } from './components/Modale/Modale'
import { SwitchMode } from './components/Modale/SwitchMode/SwitchMode'
function App() {


  const [currentTVShow,setCurrentTVShow] =useState<TVShow | null>(null);
  const [recommendationsList,setReccomendationsList] = useState<TVShow[] | null>(null)
  const [searchError,setSearchError]=useState(false)
  const [mode,setMode] = useState('tv')
  const [searchValue, setSearchValue] = useState('');
  async function fetchPopulars(mode:string){
    try{
      const popular = await TVShowAPI.fetchPopulars(mode)
      if(popular.length > 0){
        setCurrentTVShow(popular[0])
      }
    }catch(error){
      alert("Erreur durant la recherche des séries" + error)
    }
   
  }
  async function fetchRecommendations(tvShowId:number,mode:string){
    
   try{
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId,mode)
    if(recommendations.length > 0){
      setReccomendationsList(recommendations.slice(0,10))
    }
    else{
      console.warn("No recommendations found for this TV show.");
      setReccomendationsList([]);
    }
   }catch(error){
    console.error("Impossible de récupérer les recommandations ***" + error)
   }
  }

  async function searchTvShow(tvShowName:string,mode:string){
  try{
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName,mode)
    if(searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0])
    }
    else{
      setSearchError(true)
    }
  }catch(error){
    alert('La recherche a échoué' + error)  
  }
  }
  const changeMode = () => {
    setCurrentTVShow(null); 
    setReccomendationsList([]);
    setMode((prevMode) => (prevMode === "tv" ? "movie" : "tv")); 
    setSearchValue(''); 
  };

  useEffect( () => {
    fetchPopulars(mode).then(() => {
      setReccomendationsList([]);
    });
  },[mode])


  useEffect(() => {
    if(currentTVShow ){
      fetchRecommendations(currentTVShow.id,mode)
    }
    else{
      setReccomendationsList([]);
    }

  },[currentTVShow,mode])


  
  
  return (
    <>
    <div className={s.main_wrapper}
    style={{background: currentTVShow && currentTVShow.backdrop_path
      ?  `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : "black"}}>
    <div className={`${s.header} flex items-center`}>
       <div className="w-2/6">
       <Logo image={logo} title='Watowatch' subtitles='kestu veux mater ? ' />
       </div>
       <div className="w-2/6">
       <SearchBar  value={searchValue} onChange={(value) => setSearchValue(value)}   onSubmit={(tvShowName) => searchTvShow(tvShowName, mode)} />
       </div>
       <div className="w-2/6">
        <SwitchMode mode={mode} onBtnClick={changeMode} />
       </div>
      </div>
      <div className={s.details}>
      {currentTVShow && <TVShowDetails tvShow={currentTVShow} mode={mode} />} 
      </div>
      <div className={`${s.recommendations} flex justify-evenly`}>
        { recommendationsList && recommendationsList.length > 0 &&  
          <TVShowList onClickItem ={setCurrentTVShow} tvShowList={recommendationsList} mode={mode} /> }
      </div>
       {searchError && <Modale error='No result for your search, try again'   onXClick={() => setSearchError(false)}/> }
    </div>
    </>
  )
}

export default App
