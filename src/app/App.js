import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {StopLinesManager} from './StopLinesManager';
import {MapManager} from './MapManager';
import {SearchManager} from './SearchManager';
import {TimetableManager} from './TimetableManager';

export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiVehicles'], options['wawApiKey']);
    const map = new MapManager('zbiorkom-app');
    let stopMarker;
    let vehicleType;
    let vehicles;
    let interval;
    let vehicleMarkers = [];

    apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`)
      .then(stopsList => storage.storeData('stopsList', stopsList));

    const searchManager = new SearchManager('zbiorkom-app', () => storage.getData('stopsList'));

    searchManager.createInput();
    const wawMap = map.initializeMap();
    
    searchManager.addSelectionHandler(async (selection) => {
        const listOfLines = await apiClient.getLines(selection.id, selection.number);
        const stopLinesManager = new StopLinesManager('zbiorkom-app', listOfLines);
        stopLinesManager.createLinesTable();

        stopLinesManager.addClickHandler(async (handler) => {  
            const times = await apiClient.getTimes(selection.id, selection.number, handler);
            const timetableManager = new TimetableManager('zbiorkom-app', times);
            timetableManager.createTimetable();
            vehicleType = stopLinesManager.verifyVehicleType(handler);
            vehicleMarkers.forEach(marker => map.removeMarker(wawMap, marker));
            vehicles = await apiClient.getVehicles(vehicleType, handler);
            map.setVehicleMarkers(wawMap, vehicles, vehicleMarkers);
            refreshVehiclePosition(handler);
        })

        if(stopMarker !== undefined){
            map.removeMarker(wawMap, stopMarker);
        }
        stopMarker = map.addBusStopMarker(wawMap, selection, listOfLines);
    })

    function refreshVehiclePosition(line){
        clearInterval(interval);
        interval = setInterval(async () => {
            console.log(vehicles);
            vehicles = await apiClient.getVehicles(vehicleType, line);
            vehicleMarkers = map.setVehicleMarkers(wawMap, vehicles, vehicleMarkers);
        }, 5000)

    }
    
}
