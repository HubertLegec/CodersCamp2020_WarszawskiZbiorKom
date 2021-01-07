import {DOMModifier} from '../src/app/DOMModifier';
import {getByTestId, queries} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

function createMockInputWithDatalist() {
    

    const div = document.createElement('div');
    div.innerHTML = `
    <input type="search" list="AllStops" name="FindStop" id="FindStop">
    <datalist id="AllStops" data-testid="datalist"></datalist>
  `;

    return div;
}

//Testing createStopsDatalist function

test('function creates options for every array element', () => {
    const domModifier = new DOMModifier();
    const stopsMockList = [{
        name: 'Marszałkowska',
        number: '01'
    }, {
        name: 'al.Zieleniecka',
        number: '01'
    }, {
        name: 'Ząbkowska',
        number: '02'
    }];

    const container = createMockInputWithDatalist();
    const datalist = container.querySelector('#AllStops');

    domModifier.createStopsDatalist(datalist, stopsMockList);

    expect(getByTestId(container, 'datalist').childElementCount).toEqual(3);

})

test('function creates option text from name and number properties', () => {
    const domModifier = new DOMModifier();
    const stopsMockList = [{
        name: 'Marszałkowska',
        number: '01'
    }];

    const container = createMockInputWithDatalist();
    const datalist = container.querySelector('#AllStops');

    domModifier.createStopsDatalist(datalist, stopsMockList);


    expect(getByTestId(container, 'datalist').firstChild.value).toEqual('Marszałkowska 01');
})