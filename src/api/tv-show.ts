import axios from "axios"
import { BASE_URL,API_KEY_PARAM } from "../config/constants";


export class TVShowAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        return response.data.results;
    }
    static async fetchRecommendations(tvShowId:number){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
        return response.data.results;
    }
    static async fetchByTitle(title:string){
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`)
        return response.data.results
    }
}