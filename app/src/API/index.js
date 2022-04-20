import {all , day , seven} from './routesAPI';
import axios from 'axios';

//Говно код, буду рефакторить 

class API {
    static async getNews(type) {
            if(type == 0) {
                console.log(type);
                const response = await this._fetch(all);
                return response.data;
            } else if(type == 1) {
                console.log(type);
                const response = await this._fetch(seven);
                return response.data;
            } else if(type == 2) {
                console.log(type);
                const response = await this._fetch(day);
                return response.data;
            }
            
    }
    static async _fetch(urlAPI) {
        const data = await axios.get(urlAPI);
        return data;
    }
}

export default API;