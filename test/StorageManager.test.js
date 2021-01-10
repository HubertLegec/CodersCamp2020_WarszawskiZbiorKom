import {StorageManager} from '../src/app/StorageManager';

describe('StorageManager testing', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    describe('storeData function testing', () => {

        test('stores data inside local storage', () => {
            const storeManager = new StorageManager();
            const mockObject = {
                key: 'mockKey',
                value: 'mockvalue'
            };
            storeManager.storeData('mockObject', mockObject);
        
            expect(JSON.parse(localStorage.getItem('mockObject'))).toEqual(mockObject);
        });

    })

    describe('getData function testing', () => {

        test('returns stored object', () => {
            const storageManager = new StorageManager();
            const mockObject = {
                key: 'mockKey',
                value: 'mockvalue'
            }
        
            localStorage.setItem('mockObject', JSON.stringify(mockObject));
        
            expect(storageManager.getData('mockObject')).toEqual(mockObject);
        })
        
        test('returns null if storage is empty', () => {
            const storageManager = new StorageManager();
            
            expect(storageManager.getData('mockObject')).toEqual(null);
        })

    })

})