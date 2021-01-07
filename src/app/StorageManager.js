export class StorageManager {

    storeData(itemName, item) {
        if (localStorage.getItem(itemName) == JSON.stringify(item)) {
            return;
        }
        localStorage.setItem(itemName, JSON.stringify(item));
    }

    getData(itemName) {
        if(localStorage.getItem(itemName) != null) {
            return JSON.parse(localStorage.getItem(itemName));
        }
    }

}