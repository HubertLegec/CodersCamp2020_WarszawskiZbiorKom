import {InputSearch} from '../src/app/InputSearch';
import '@testing-library/jest-dom/extend-expect';


let container = document.createElement('div');
container.id = 'zbiorkom-app';
document.body.append(container)
const input = new InputSearch();
input.createInput();

describe('Tests input exists and values', () => {

    test('#autoComplete input exist', () => {
        expect(document.body.contains('#autoComplete')).toBe(false)
    });

})