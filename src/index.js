import 'regenerator-runtime/runtime' //async/await with Parcel
import {App} from "./app/App";
const WAW_API_BASE_URL = "https://api.um.warszawa.pl/api/" || process.env.WAW_API_BASE_URL;
const WAW_API_ALL_STOPS = 'action/dbstore_get/?id=ab75c33d-3a26-4342-b36a-6e5fef0a3ac3&sortBy=id&apikey=';
const API_KEY = '66b60069-cff2-418b-a9a9-4a64cfc17443';
const WAW_API_GET_ID = 'action/dbtimetable_get/?id=b27f4c17-5c50-4a5b-89dd-236b282bc499&name=';

window.onload = () => App({options: {wawApiBaseUrl: WAW_API_BASE_URL, wawApiAllStops: WAW_API_ALL_STOPS, wawApiKey: API_KEY, wawApiGetId : WAW_API_GET_ID}})
