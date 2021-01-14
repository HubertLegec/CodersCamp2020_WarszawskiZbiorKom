import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {DOMModifier} from './DOMModifier';
export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl'], options['wawApiKey']);
    const result = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);
    storage.storeData('stopsList', result);   
    const obj = {
        id: "7013",
        stopNr: "01",
    }
    const domModifier = new DOMModifier(obj.id, obj.stopNr, (id, stopNr) => apiClient.getLines(id, stopNr));
    domModifier.createSortedStopsDatalist('AllStops', storage.getData('stopsList'));
}
