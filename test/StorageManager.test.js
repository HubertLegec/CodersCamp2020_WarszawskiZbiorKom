import {StorageManager} from '../src/app/StorageManager';

beforeEach(() => {
    localStorage.clear();
});

// Testing storeData function

test('storeData function stores data if empty', () => {
    const mockStorage = new StorageManager();
    const mockObject = {
        key: 'mockKey',
        value: 'mockvalue'
    };
    mockStorage.storeData('mockObject', mockObject);

    expect(localStorage.getItem('mockObject')).not.toEqual(null);
});

test('storeData function returns false if same value', () => {
    const mockStorage = new StorageManager();
    const mockObject = {
        key: 'mockKey',
        value: 'mockvalue'
    };

    mockStorage.storeData('mockObject', mockObject);

    expect(mockStorage.storeData('mockObject', mockObject)).toEqual(false);
})

test('storeData function modifies data if different value', () => {
    const mockStorage = new StorageManager();
    const mockObject1 = {
        key: 'mockKey',
        value: 'mockvalue1'
    };
    const mockObject2 = {
        key: 'mockKey',
        value: 'mockvalue2'
    };

    mockStorage.storeData('mockObject', mockObject1);
    mockStorage.storeData('mockObject', mockObject2);

    expect(JSON.parse(localStorage.getItem('mockObject'))).toEqual(mockObject2);

});

// Testing getData function

test('getData function returns parsed data', () => {
    const mockStorage = new StorageManager();
    const mockObject = {
        key: 'mockKey',
        value: 'mockvalue'
    }

    localStorage.setItem('mockObject', JSON.stringify(mockObject));

    expect(typeof mockStorage.getData('mockObject')).toEqual('object');
})

test('getData function gets stored data', () => {
    const mockStorage = new StorageManager();
    const mockObject = {
        key: 'mockKey',
        value: 'mockvalue'
    }

    localStorage.setItem('mockObject', JSON.stringify(mockObject));

    expect(mockStorage.getData('mockObject')).toEqual(mockObject);
})

test('getData function returns false if storage is empty', () => {
    const mockStorage = new StorageManager();
    
    expect(mockStorage.getData('mockObject')).toEqual(false);
})