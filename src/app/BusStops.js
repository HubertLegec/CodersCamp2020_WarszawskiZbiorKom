let map = L.map('map').setView([52.2297700, 21.0117800], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

const busStops = [];
let selectedStops = [];
let busStopMarkers = [];

document.getElementById("getAllBusStops").addEventListener("click", getAllBusStops);
document.getElementById("submitSearch").addEventListener("click", findStops);

class BusStop {
    constructor(name, number, id, lat, lng, lines, direction) {
        this.name = name;
        this.number = number;
        this.id = id;
        this.lat = lat;
        this.lng = lng;
        this.lines = lines;
        this.direction = direction;
    }
}

function getAllBusStops() {
    const busStopsEndpoint = 'https://api.um.warszawa.pl/api/action/dbstore_get/?id=ab75c33d-3a26-4342-b36a-6e5fef0a3ac3&apikey=9c3aae8c-d197-459d-a570-e055c1497ca2';
    fetch(busStopsEndpoint)
    .then(response => response.json())
    .then(data => data.result.forEach(async (element) => {
        let lines = [];
        let busStop = new BusStop(element.values[2].value, element.values[1].value, element.values[0].value, element.values[4].value, element.values[5].value, lines, element.values[6].value );
        busStops.push(busStop);
    }))
}

async function getLinesForBusStop(busStopId, busStopNr){
    const linesEndpoint = `https://api.um.warszawa.pl/api/action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${busStopId}&busstopNr=${busStopNr}&apikey=213a69a2-30fb-4d1e-b819-aa1b5c02f3c6`;
    let response = await fetch(linesEndpoint);
    const data = await response.json();
    return data.result.map(el => el.values[0].value);         
}

async function findStops() {
    const lineNumber = document.getElementById('LineNumberInput').value;
    const fullStopName = document.getElementById('StopNameInput').value;
    const busStopNameSplitIndex = fullStopName.lastIndexOf(" ");
    const stopName = fullStopName.slice(0, busStopNameSplitIndex);
    const stopNumber = fullStopName.slice(busStopNameSplitIndex + 1, fullStopName.length);
    const startingBusStop = busStops.find(stop => stop.name == stopName && stop.number === stopNumber);

    selectedStops = await filterStops(startingBusStop, lineNumber);
    
    console.log("Selected stops", selectedStops);
    // selectedStops.forEach(stop => setMarker(stop));
}

async function filterStops(currentStop, lineNumber) {

    let queue = [];
    let result = [];
    queue.push(currentStop);

    while(queue.length){
        currentStop = queue.shift();
        let nextStops = busStops.filter(stop => stop.name == currentStop.direction);
        selectedCandidates = await selectCandidates(nextStops);
        queue = queue.concat(selectedCandidates);
        result = result.concat(selectedCandidates);
    }

    async function selectCandidates(nextStopCandidates) {
        let selectedCandidates = [];
        for (stop of nextStopCandidates) {
                try{
                    stop.lines = await getLinesForBusStop(stop.id, stop.number);
                } catch{
                    console.error();
                }
            if(stop.direction !== currentStop.name && stop.lines.includes(lineNumber) && !result.includes(stop)){
                selectedCandidates.push(stop);
                setMarker(stop);
            }
        }
        return new Promise((resolve, reject) => {
            resolve(selectedCandidates);
        });   
    } 
    return result;
}

function setMarker(busStop){
    if(busStop.lat && busStop.lng != "null"){
        let busStopMarker = L.marker([busStop.lat,busStop.lng])
        .addTo(map)
        .bindPopup(`Name:  ${busStop.name} ${busStop.number}
        Lines: ${busStop.lines}`);
        busStopMarkers.push(busStopMarker);
    }
};

function removeMarkers(markers){
    markers.forEach(marker => map.removeLayer(marker));
}