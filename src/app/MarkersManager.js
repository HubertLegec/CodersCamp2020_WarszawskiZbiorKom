import busStopIconUrl from '../img/bus-stop.png';
import vehicleIconUrl from '../img/bus.png';

export class Marker{

    addBusStopMarker(map, busStop, listOfLines){ 
        const busStopIcon = L.icon({iconUrl: busStopIconUrl, iconSize: [32, 32]});
        let busStopMarker;

        if(busStop.lat && busStop.lng != "null"){
            busStopMarker = new L.marker([busStop.lat,busStop.lng], {icon: busStopIcon})
            .addTo(map)
            .bindPopup(`${busStop.name} ${busStop.number} <br> Lines: ${listOfLines}`)
            .openPopup();
        }
        return busStopMarker;
    };

    addVehicleMarker(map, vehicles){
        const vehicleIcon = L.icon({iconUrl: vehicleIconUrl, iconSize: [24, 24]});
        let vehicleMarkers = [];

        return vehicleMarkers = vehicles.forEach(vehicle =>
             new L.marker([vehicle.lat,vehicle.lng], {icon: vehicleIcon})
            .addTo(map));
    }
    
    removeMarkers(markers){
        markers.forEach(marker => map.removeLayer(marker));
    }
}