import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {StopLinesManager} from './StopLinesManager';
import {Map} from './Map';
import {Marker} from './MarkersManager';

export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiVehicles'], options['wawApiKey']);
    const map = new Map();
    const marker = new Marker();
    
    const result = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);

    storage.storeData('stopsList', result);   
    const obj = {
        name: "Centrum",
        number: "01",
        id: "7013",
        lat: "52.228976",
        lng: "21.011987",
        direction: "Hoża"
    }

    const listOfLines = await apiClient.getLines(obj.id, obj.number);
    const stopLinesManager = new StopLinesManager('zbiorkom-app', listOfLines);
    stopLinesManager.createButton();
    const wawMap = map.initializeMap();
    marker.addBusStopMarker(wawMap, obj, listOfLines);

    let vehicles = await apiClient.getVehicles(1, 112);
    let vehicleMarkers = marker.addVehicleMarker(wawMap, vehicles);
}
