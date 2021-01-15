import {StopLinesManager} from '../src/app/StopLinesManager';
import { fireEvent, getByRole, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('StopLinesManager', () => {
    let container;

    function createContainer() {
        const div = document.createElement('div');
        div.id = "zbiorkom-app"; 

        return div;
    }
    
    beforeEach(() => {
        document.body.innerHTML = '';
        container = createContainer();
        document.body.append(container);
    })

    test('creates search button', () => {
        const stopLinesManager = new StopLinesManager('zbiorkom-app', []);    
    
        stopLinesManager.createButton();
            
        expect(getByRole(container, 'button')).toBeInTheDocument();       
    })
    
    test('clicking button creates divs for tram/bus lists', () => {
        const stopLinesManager = new StopLinesManager('zbiorkom-app', []);
        const button = stopLinesManager.createButton();

        fireEvent.click(button);
        const busLine = getByText(container, containsIgnoringHtmlTags('Lista Autobusów'));
        const tramLine = getByText(container, containsIgnoringHtmlTags('Lista Tramwajów'));

        expect(busLine).toBeInTheDocument();
        expect(tramLine).toBeInTheDocument();
    })
    
    test('creates option for array elements after clicking', () => {
        const data = ["109", "235" , "509"]
        const stopLinesManager = new StopLinesManager('zbiorkom-app', data);    
        const button = stopLinesManager.createButton();

        fireEvent.click(button);
        
        data.forEach(nr => 
            expect(getByText(container, containsIgnoringHtmlTags(nr))).toBeInTheDocument()
        );       
    })  
    
    test('removes elements by class', () => {
           
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
        const stopLinesManager = new StopLinesManager('zbiorkom-app', []);

        stopLinesManager.removeElementsByClass('randomClass');
        let elementsWithGivenClass = document.getElementsByClassName('randomClass');

        expect(elementsWithGivenClass.length).toEqual(0);
    })

    function containsIgnoringHtmlTags(text) {
        return (content, node) => {
          const hasText = node => node.textContent.indexOf(text) >= 0;
          const childrenDontHaveText = Array.from(node.children)
            .every(child => !hasText(child));
          return hasText(node) && childrenDontHaveText;
        }
    }

});