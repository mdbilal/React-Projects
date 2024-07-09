import axios from 'axios';

const TOKEN = 'patNMQt4ebeiJnKl1.6731403336908be204defdc134d83ea9c49e705227ef1d4009ea6b9c5db9e5d0';
const BASE_ID = 'appuKQNeRECxKbjtC';

const airtable = axios.create({
    baseURL: `https://api.airtable.com/v0/${BASE_ID}`,
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
});

export default airtable;
