import { ApiClient } from './ApiClient';
import { StorageManager } from './StorageManager';
import { SearchManager } from './SearchManager';


export const App = async ({ options }) => {
    const storage = new StorageManager();
    const apiClient = new ApiClient(options['wawApiBaseUrl']);
    const stopsList = await apiClient.getStops(`${options['wawApiAllStops']}${options['wawApiKey']}`);
    storage.storeData('stopsList', stopsList);
    const searchManager = new SearchManager('zbiorkom-app', () => stopsList);
    searchManager.createInput();
    searchManager.autoComplete();
}
