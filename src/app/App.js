import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {StopLinesManager} from './StopLinesManager';
import {MapManager} from './MapManager';
import {SearchManager} from './SearchManager';
export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiVehicles'], options['wawApiKey']);
    const map = new MapManager();
    const wawMap = map.initializeMap();
    let stopMarker;
    let vehicleMarkers = [];

    const stopsList = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);
    storage.storeData('stopsList', stopsList);

    const searchManager = new SearchManager('zbiorkom-app', () => stopsList);

    searchManager.createInput();
    searchManager.addSelectionHandler(async (selection) => {
        const listOfLines = await apiClient.getLines(selection.id, selection.number);
        const stopLinesManager = new StopLinesManager('zbiorkom-app', listOfLines);
        stopLinesManager.createLinesTable();
        if(stopMarker !== undefined){
            map.removeMarker(wawMap, stopMarker);
        }
            stopMarker = map.addBusStopMarker(wawMap, selection, listOfLines);     
    })

    setInterval(async function() {
            const vehicles = await apiClient.getVehicles(1, 112);
            vehicleMarkers = map.setVehicleMarkers(wawMap, vehicles, vehicleMarkers);
      }, 5000)
}
