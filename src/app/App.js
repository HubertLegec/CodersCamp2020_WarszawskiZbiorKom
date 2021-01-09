import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {DOMModifier} from './DOMModifier';
export const App = ({options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl']);
    const domModifier = new DOMModifier();

    apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`).then(result => storage.storeData('stopsList', result));
    domModifier.createSortedStopsDatalist('AllStops', storage.getData('stopsList'));

}