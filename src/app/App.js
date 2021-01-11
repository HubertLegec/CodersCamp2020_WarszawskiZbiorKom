import {linesList} from "./ApiClient";
export const App = ({options}) => {
    linesList(options.wawApiKey, options.wawApiBaseUrl)
}


