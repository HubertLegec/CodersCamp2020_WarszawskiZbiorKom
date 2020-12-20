import 'regenerator-runtime/runtime' //async/await with Parcel
import {App} from "./app/App";

const WAW_API_BASE_URL = process.env.WAW_API_BASE_URL || "https://api.um.warszawa.pl/api";

window.onload = () => App({options: {wawApiBaseUrl: WAW_API_BASE_URL}})
