import { ApiClient } from './ApiClient';
import { StorageManager } from './StorageManager';
import { InputSearch } from './InputSearch';
import { SearchManager } from './SearchManager';


export const App = async ({ options }) => {
    const input = new InputSearch();
    input.createInput();
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl']);
    const query = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);
    storage.storeData('stopsList', query);
    const autoComplete = await new SearchManager('name');
    document.querySelector("#autoComplete").addEventListener("results", (event) => {
        return event;
    });
}