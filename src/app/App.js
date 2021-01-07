import {ApiClient} from './ApiClient';
import {StorageManager} from './StorageManager';
import {DOMModifier} from './DOMModifier';
export const App = ({ options}) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient('https://api.um.warszawa.pl/api/');
    const domModifier = new DOMModifier();
    const stopsSearchInputDatalist = document.querySelector('#AllStops');

    apiClient.getStops().then(result => storage.storeData('stopsList', result));
    domModifier.createStopsDatalist(stopsSearchInputDatalist, storage.getData('stopsList'));

}