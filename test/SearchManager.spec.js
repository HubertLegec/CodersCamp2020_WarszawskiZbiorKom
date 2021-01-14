import { SearchManager } from '../src/app/SearchManager';
import { getByRole, getAllByRole, waitFor, fireEvent, getAllByText } from '@testing-library/dom';
import '@testing-library/jest-dom';
import 'jest-localstorage-mock';
import { Stop } from '../src/app/Stop';

//przy imporcie searchmanagera jest błąd 'Missing class properties transform'
describe('SearchManager testing', () => {

    function createContainerForInput() {
            const div = document.createElement('div');
            div.id = 'zbiorkom-app';
            
            return div;
    }
    
    describe('createInput testing', () => {

        beforeEach(() => {
            document.body.innerHTML = '';
        })

        test('creates input into div', () => {
            const container = document.body;
            container.append(createContainerForInput());
            const searchManager = new SearchManager('zbiorkom-app');

            searchManager.createInput();

            expect(getByRole(container, 'textbox')).toBeInTheDocument();
        })

        test('created input id equals "autoComplete"', () => {
            const container = document.body;
            container.append(createContainerForInput());
            const searchManager = new SearchManager('zbiorkom-app');

            searchManager.createInput();

            expect(getByRole(container, 'textbox').id).toEqual('autoComplete');
        })

    })
    
})