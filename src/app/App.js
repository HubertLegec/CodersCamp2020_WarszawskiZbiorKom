import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {DOMModifier} from './DOMModifier';
export const App = ({ options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient('https://api.um.warszawa.pl/api/');
    const domModifier = new DOMModifier();

    apiClient.getStops().then(result => storage.storeData('stopsList', result));
    domModifier.createStopsDatalist('AllStops', storage.getData('stopsList'));

}