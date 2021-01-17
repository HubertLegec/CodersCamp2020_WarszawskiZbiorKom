import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {StopLinesManager} from './StopLinesManager';
import {Map} from "./Map";

export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiKey']);
    const map = new Map();
    
    const result = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);

    storage.storeData('stopsList', result);   
    const obj = {
        id: "7013",
        stopNr: "01",
    }
    
    const listOfLines = await apiClient.getLines(obj.id, obj.stopNr);
    const stopLinesManager = new StopLinesManager('zbiorkom-app', listOfLines);
    stopLinesManager.createButton();
    map.initializeMap();
}
