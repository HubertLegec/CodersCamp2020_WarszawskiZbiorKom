import {displayTransportLines} from "./ApiClient";
import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {DOMModifier} from './DOMModifier';
export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl']);
    const domModifier = new DOMModifier(options.wawApiKey, options.wawApiBaseUrl);
    const displayLinesList = new displayTransportLines(options.wawApiKey, options.wawApiBaseUrl, options['wawApiGetId'])
    const result = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);
    storage.storeData('stopsList', result);   
    domModifier.createSortedStopsDatalist('AllStops', storage.getData('stopsList'));    
    displayLinesList.linesList()
}