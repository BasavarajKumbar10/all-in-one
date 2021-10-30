import axios from "axios"
import { MAP_BOX_ACCESS_TOKEN } from "../config/constants"

const MAP_BOX_BASE_URL = 'https://api.mapbox.com'
const ENDPOINTS = {
    searchLocation: (searchKey: string) => `${MAP_BOX_BASE_URL}/geocoding/v5/mapbox.places/${searchKey}.json`,
};

const searchLocation = async (searchKey: string) => {
    try {
        const res = await axios.get(ENDPOINTS.searchLocation(searchKey), {
            params: {
                access_token: MAP_BOX_ACCESS_TOKEN,
                autocomplete: true,
                country: 'in',
            }
        });
        console.debug('API response: ', res);
        return res.data;
    } catch (e) {
        console.error('API error', JSON.stringify(e));
        throw new Error(e);
    }
}

export const MapServices = {
    searchLocation,
}