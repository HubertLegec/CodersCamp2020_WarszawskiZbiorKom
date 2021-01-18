export class Vehicle {
    constructor(line, vehicleNumber, brigade, lat, lng, timestamp) {
        this.line = line;
        this.vehicleNumber = vehicleNumber;
        this.brigade = brigade;
        this.lat = lat;
        this.lng = lng;
        this.timestamp = timestamp;
    }
}