import { request } from '../utilities/api'

const locationsURL = "/api/locations";

const getAllLocations = () => request("GET", locationsURL);
const getLocationsById = (id) => request("GET", `${locationsURL}/${id}`);

export default {
    getAllLocations,
    getLocationsById
}