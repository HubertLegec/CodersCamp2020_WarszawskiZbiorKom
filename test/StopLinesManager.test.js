import {StopLinesManager} from '../src/app/StopLinesManager';
import { fireEvent, getByRole, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('StopLinesManager', () => {
    let container;

    function createContainer() {
        const div = document.createElement('div');
        div.id = "panel"; 

        return div;
    }
    
    beforeEach(() => {
        document.body.innerHTML = '';
        container = createContainer();
        document.body.append(container);
    })
    
    test('creates divs for tram/bus lists', () => {
        const data = [];
        const stopLinesManager = new StopLinesManager('panel', data);
        stopLinesManager.createLinesTable();

        const busLine = getByText(container, containsIgnoringHtmlTags('Lista Autobusów'));
        const tramLine = getByText(container, containsIgnoringHtmlTags('Lista Tramwajów'));

        expect(busLine).toBeInTheDocument();
        expect(tramLine).toBeInTheDocument();
    })
    
    test('creates option for array elements after clicking', () => {
        const data = ["109", "235" , "509"]
        const stopLinesManager = new StopLinesManager('panel', data);
        stopLinesManager.createLinesTable();  
        
        data.forEach(nr => 
            expect(getByText(container, containsIgnoringHtmlTags(nr))).toBeInTheDocument()
        );       
    })  
    
    test('removes linesTable and creates new if linesTable existed', () => {
        const data1 = ["105", "312", "504", "113"];
        const data2 = ["102", "606"];
        const stopLinesManager = new StopLinesManager('panel', data1);

        stopLinesManager.createLinesTable();
        stopLinesManager.arrOfTransports = data2;
        stopLinesManager.createLinesTable();
        const stopLines = document.getElementsByClassName('elementOfList');

        expect(stopLines.length).toEqual(2);
        data2.forEach(nr => 
            expect(getByText(container, containsIgnoringHtmlTags(nr))).toBeInTheDocument()
        );
    })

    test('return correct vehicle type', () => {
        const data = ["109", "4" , "null"]
        const stopLinesManager = new StopLinesManager('panel', data);
        expect(data.map(lineNr => stopLinesManager.verifyVehicleType(lineNr))).toEqual(['bus','tram','other']);
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