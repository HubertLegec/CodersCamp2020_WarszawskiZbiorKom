import { MapManager } from '../src/app/MapManager';

describe('Map testing', () => {

    beforeEach(() => {
        document.body.innerHTML = '';
    })

    test('initializeMap creates map inside div with "map" id', () => {
        const div = document.createElement('div');
        div.id = 'map';
        document.body.append(div);
        const map = new MapManager();
        const mapContainer = document.getElementById('map');

        map.initializeMap();

        expect(mapContainer.firstChild.classList.contains('leaflet-map-pane')).toBeTruthy();
    })
})