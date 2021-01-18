import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {App} from './app/App';

const WAW_API_BASE_URL = 'https://api.um.warszawa.pl/api/' || process.env.WAW_API_BASE_URL;
const WAW_API_ALL_STOPS = 'action/dbstore_get/?id=ab75c33d-3a26-4342-b36a-6e5fef0a3ac3&sortBy=id&apikey=';
const WAW_API_VEHICLES = 'action/busestrams_get/?resource_id=f2e5503e-927d-4ad3-9500-4ab9e55deb59&apikey=';
const API_KEY = '66b60069-cff2-418b-a9a9-4a64cfc17443';

window.onload = () => App({options: {
    wawApiBaseUrl: WAW_API_BASE_URL,
    wawApiAllStops: WAW_API_ALL_STOPS,
    wawApiVehicles: WAW_API_VEHICLES,
    wawApiKey: API_KEY}})
