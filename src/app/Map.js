export const loadMap = () => {
    const L = require('leaflet');
    const map = L.map('map').setView([52.2297700, 21.0117800], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
