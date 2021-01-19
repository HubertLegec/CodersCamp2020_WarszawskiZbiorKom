import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {StopLinesManager} from './StopLinesManager';
import {MapManager} from './MapManager';
import {SearchManager} from './SearchManager';
import {TimetableManager} from './TimetableManager';
import {PanelManager} from './PanelManager';

export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiVehicles'], options['wawApiKey']);
    const map = new MapManager('zbiorkom-app');
    const panel = new PanelManager('zbiorkom-app');
    let stopMarker;
    let vehicleType;
    let vehicles;
    let intervalHandle;
    let vehicleMarkers = [];

    apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`)
      .then(stopsList => storage.storeData('stopsList', stopsList));

    const searchManager = new SearchManager('panel', () => storage.getData('stopsList'));
    panel.createPanel();

    searchManager.createInput();
    const wawMap = map.initializeMap();
    
    searchManager.addSelectionHandler(async (selection) => {
        const listOfLines = await apiClient.getLines(selection.id, selection.number);
        const stopLinesManager = new StopLinesManager('panel', listOfLines);
        stopLinesManager.createLinesTable();
        panel.removeElement('timetable');
        stopLinesManager.addClickHandler(async (handler) => {  
            const times = await apiClient.getTimes(selection.id, selection.number, handler);
            const timetableManager = new TimetableManager('panel', times);
            timetableManager.createTimetable();
            vehicleType = stopLinesManager.verifyVehicleType(handler);
            vehicleMarkers.forEach(marker => map.removeMarker(wawMap, marker));
            vehicleMarkers = [];
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
        clearInterval(intervalHandle);
        intervalHandle = setInterval(async () => {
            vehicles = await apiClient.getVehicles(vehicleType, line);
            vehicleMarkers = map.setVehicleMarkers(wawMap, vehicles, vehicleMarkers);
        }, 5000)
    }   
}
