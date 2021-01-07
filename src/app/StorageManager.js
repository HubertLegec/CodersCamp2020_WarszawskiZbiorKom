export class StorageManager {

    storeData(itemName, item) {
        if (localStorage.getItem(itemName) == JSON.stringify(item)) {
            return false;
        }
        localStorage.setItem(itemName, JSON.stringify(item));
    }

    getData(itemName) {
        if(localStorage.getItem(itemName) != null) {
            return JSON.parse(localStorage.getItem(itemName));
        }
        return false;
    }

}