export class StorageManager {

    storeData(itemName, item) {
        localStorage.setItem(itemName, JSON.stringify(item));
    }

    getData(itemName) {
        if(localStorage.getItem(itemName) != null) {
            return JSON.parse(localStorage.getItem(itemName));
        }
        return null;
    }

}