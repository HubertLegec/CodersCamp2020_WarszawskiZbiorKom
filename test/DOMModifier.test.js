import {DOMModifier} from '../src/app/DOMModifier';
import '@testing-library/jest-dom/extend-expect';

describe('Test DOMModifier class', () => {

    function createDivWithLists() {

        const div = document.createElement('div');
        div.classList.add('linesList')  
        div.id = "linesList" 
        return div;
    }
    

    describe('Test creating tram/bus list', () => {
        const domModifier = new DOMModifier();
        beforeEach(() => {
            document.body.innerHTML = '';
        })
        
        test('creates options for every array element', () => {
            const domModifier = new DOMModifier();    
            document.body.append(createDivWithLists());
        
            domModifier.displayLines(["109", "235" , "509"]);
            
            expect(document.getElementById("linesList").childElementCount).toEqual(2);
        
        })
    

    })

    describe('Test append child to bus list', () => {
        const domModifier = new DOMModifier();
        beforeEach(() => {
            document.body.innerHTML = '';
        })
        
        test('creates options for every array element', () => {
            const domModifier = new DOMModifier();    
            document.body.append(createDivWithLists());
        
            domModifier.displayLines(["109", "235" , "N03"]);
            
            expect(document.querySelectorAll('[data-testid="bus"]').length).toEqual(3);
        })
    })

    describe('Test append child to tram list', () => {
        const domModifier = new DOMModifier();
        beforeEach(() => {
            document.body.innerHTML = '';
        })
        
        test('creates options for every array element', () => {
            const domModifier = new DOMModifier();    
            document.body.append(createDivWithLists());
        
            domModifier.displayLines(["3", "13" , "25"]);
        
            expect(document.querySelectorAll('[data-testid="tram"]').length).toEqual(3);
        })
    })

    describe('Testing removeElementByClass function', () => {
        
        test('creates p, div and headers with "randomClass"', () => {
           
        beforeEach(() => {
            for(var i=0; i<10; i++)
            {
                const para = document.createElement('p');
                para.classList.add('randomClass');
                document.body.appendChild(para);

                const div = document.createElement('div');
                div.classList.add('randomClass');
                document.body.appendChild(div);

                const head = document.createElement('h1');
                head.classList.add('randomClass');
                document.body.appendChild(head);
            }
        })
        
        const domModifier = new DOMModifier();
        domModifier.removeElementsByClass('randomClass');

        let elementsWithGivenClass = document.getElementsByClassName('randomClass');
        expect(elementsWithGivenClass.length).toEqual(0);

        })

    })

});