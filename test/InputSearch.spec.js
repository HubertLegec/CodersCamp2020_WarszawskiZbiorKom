import {InputSearch} from '../src/app/InputSearch';
import '@testing-library/jest-dom/extend-expect';


let container = document.createElement('div');
container.id = 'zbiorkom-app';
document.body.append(container)
const input = new InputSearch();
input.createInput();
const autocompleteInput = document.getElementById('autoComplete');

describe('Tests input exists and values', () => {

    test('#autoComplete input exist', () => {
        expect(autocompleteInput.length).not.toBe(0);
    });

    test('#autoComplete input value is łąkowa', () => {
        expect(autocompleteInput.value = "łąkowa").toBe("łąkowa");
    });
})