import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {DOMModifier} from './DOMModifier';
export const App = async ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl']);
    const domModifier = new DOMModifier();

    const result = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);
    storage.storeData('stopsList', result);   
    domModifier.createSortedStopsDatalist('AllStops', storage.getData('stopsList'));
    domModifier.map();
}