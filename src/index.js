import 'regenerator-runtime/runtime' //async/await with Parcel
import {App} from "./app/App";
const WAW_API_BASE_URL = "https://api.um.warszawa.pl/api/" || process.env.WAW_API_BASE_URL;
const API_KEY = '213a69a2-30fb-4d1e-b819-aa1b5c02f3c6';

window.onload = () => App({options: {wawApiKey: API_KEY, wawApiBaseUrl: WAW_API_BASE_URL}})
