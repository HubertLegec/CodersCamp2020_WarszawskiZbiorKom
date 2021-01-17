import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {StopLinesManager} from './StopLinesManager';
import {Map} from "./Map";
import {SearchManager} from './SearchManager';
export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiKey']);
    const map = new Map();
    const stopsList = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);
    storage.storeData('stopsList', stopsList);

    const searchManager = new SearchManager('zbiorkom-app', () => stopsList);
    searchManager.createInput();
    searchManager.addSelectionHandler(async (selection) => {
        const listOfLines = await apiClient.getLines(selection.id, selection.number);
        const stopLinesManager = new StopLinesManager('zbiorkom-app', listOfLines);
        stopLinesManager.createLinesTable();
    })
    map.initializeMap();  
}
