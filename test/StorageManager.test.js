import {StorageManager} from '../src/app/StorageManager';

beforeEach(() => {
    localStorage.clear();
});

// Testing storeData function

test('storeData function stores data inside local storage', () => {
    const storeManager = new StorageManager();
    const mockObject = {
        key: 'mockKey',
        value: 'mockvalue'
    };
    storeManager.storeData('mockObject', mockObject);

    expect(JSON.parse(localStorage.getItem('mockObject'))).toEqual(mockObject);
});

// Testing getData function

test('getData function returns stored object', () => {
    const storageManager = new StorageManager();
    const mockObject = {
        key: 'mockKey',
        value: 'mockvalue'
    }

    localStorage.setItem('mockObject', JSON.stringify(mockObject));

    expect(storageManager.getData('mockObject')).toEqual(mockObject);
})

test('getData function returns null if storage is empty', () => {
    const storageManager = new StorageManager();
    
    expect(storageManager.getData('mockObject')).toEqual(null);
})