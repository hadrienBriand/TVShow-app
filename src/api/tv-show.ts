import axios from "axios"
import { BASE_URL,API_KEY_PARAM } from "../config/constants";


export class TVShowAPI {
    static async fetchPopulars(mode:string){
        const response = await axios.get(`${BASE_URL}${mode}/popular${API_KEY_PARAM}`)
        return response.data.results;
    }
    static async fetchRecommendations(tvShowId:number,mode:string){
        const response = await axios.get(`${BASE_URL}${mode}/${tvShowId}/recommendations${API_KEY_PARAM}`)
        return response.data.results;
    }
    static async fetchByTitle(title:string,mode:string){
        const response = await axios.get(`${BASE_URL}search/${mode}${API_KEY_PARAM}&query=${title}`)
        return response.data.results
    }
}