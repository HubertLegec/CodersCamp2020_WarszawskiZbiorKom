import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {StopLinesManager} from './StopLinesManager';
import {Map} from "./Map";
import {SearchManager} from './SearchManager';
import {TimetableManager} from './TimetableManager';

export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiKey']);
    const map = new Map();
    apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`)
      .then(stopsList => storage.storeData('stopsList', stopsList));

    const searchManager = new SearchManager('zbiorkom-app', () => storage.getData('stopsList'));
    searchManager.createInput();
    searchManager.addSelectionHandler(async (selection) => {
        const listOfLines = await apiClient.getLines(selection.id, selection.number);
        const stopLinesManager = new StopLinesManager('zbiorkom-app', listOfLines); 
        stopLinesManager.addClickHandler(async (handler) => {  
            const times = await apiClient.getTimes(selection.id, selection.number, handler);
            const timetableManager = new TimetableManager('zbiorkom-app', times);
            timetableManager.createTimetable();
        })
        stopLinesManager.createLinesTable();
    })

    map.initializeMap();  
}
