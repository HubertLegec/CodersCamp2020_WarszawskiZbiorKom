import { MapManager } from '../src/app/MapManager';

describe('Map testing', () => {

    beforeEach(() => {
        document.body.innerHTML = '';
    })

    test('initializeMap creates map inside div with "container" id', () => {
        const div = document.createElement('div');
        div.id = 'container';
        document.body.append(div);
        const map = new MapManager("container");
        map.initializeMap();
        const mapContainer = document.getElementById('map');
        
        expect(mapContainer.firstChild.classList.contains('leaflet-map-pane')).toBeTruthy();
    })
})