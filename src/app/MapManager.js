import busStopIconUrl from '../img/bus-stop.png';
import busIconUrl from '../img/bus.png';
import tramIconUrl from '../img/tram.png';
import 'leaflet/dist/leaflet.css';

export class MapManager {

    constructor(mapContainerId) {
        this.mapContainerId = mapContainerId;
      }

    initializeMap(){
        const mapContainer = document.createElement('div');
        mapContainer.id = 'map';
        mapContainer.style = "width: 100vw; height: 100vh";
        document.getElementById(this.mapContainerId).append(mapContainer);
        const L = require('leaflet');
        const map = L.map(mapContainer,{ zoomControl: false }).setView([52.2297700, 21.0117800], 12);
        L.control.zoom({position: 'bottomright'}).addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        return map;
    }

    addBusStopMarker(map, busStop, listOfLines){ 
        const busStopIcon = L.icon({iconUrl: busStopIconUrl, iconSize: [32, 32]});
        let busStopMarker;
        if(busStop.lat != "null" && busStop.lng != "null"){
            map.flyTo([busStop.lat,busStop.lng], 17);
            busStopMarker = new L.marker([busStop.lat,busStop.lng], {icon: busStopIcon})
            .addTo(map)
            .bindPopup(`${busStop.name} ${busStop.number} <br> Lines: ${listOfLines}`);
        }
        return busStopMarker;
    };

    setVehicleMarkers(map, vehicleType, vehicles, vehicleMarkers){
        let vehicleIcon;
        if(vehicleType ==='bus'){
           vehicleIcon = L.icon({iconUrl: busIconUrl, iconSize: [24, 24]});
        } else if(vehicleType ==='tram'){
            vehicleIcon = L.icon({iconUrl: tramIconUrl, iconSize: [24, 24]});
         } else{
             throw new Error("Unable to track this vehicle.");
         }

        let zoomBoundsToBeSet;
        if(vehicleMarkers.length === 0 && vehicles.length > 0){
            zoomBoundsToBeSet = true;
        }
        vehicles.forEach(vehicle => {
            if (!vehicleMarkers.hasOwnProperty(vehicle.vehicleNumber)){
                vehicleMarkers[vehicle.vehicleNumber] = L.marker([vehicle.lat,vehicle.lng], {icon: vehicleIcon})
                .addTo(map)
                .bindPopup(`${vehicle.line}`);
            } else {
                vehicleMarkers[vehicle.vehicleNumber].setLatLng([vehicle.lat, vehicle.lng]);
            }
        })
        if(zoomBoundsToBeSet){
            map.flyToBounds(this.findBounds(vehicleMarkers));
            zoomBoundsToBeSet = false;
        }
        return vehicleMarkers;
    }
    
    removeMarker(map, marker){
        map.removeLayer(marker);
    }

    findBounds(vehicleMarkers) {
        let latlngs = [];
        vehicleMarkers.forEach(marker =>{ 
            latlngs.push(marker.getLatLng());
        })
        return L.latLngBounds(latlngs);
    }
}
