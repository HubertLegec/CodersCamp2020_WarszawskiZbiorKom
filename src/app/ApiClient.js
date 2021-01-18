import {Stop} from './Stop';
import { Vehicle } from './Vehicle';

export class ApiClient {
    constructor(baseUrl, vehiclesUrl, apiKey){
        this.baseUrl = baseUrl;
        this.vehiclesUrl = vehiclesUrl;
        this.apiKey = apiKey;
    }

    async getStops(endpointUrl) {        
        const response = await fetch(`${this.baseUrl}${endpointUrl}`);
        const data = await response.json();
                
        return data['result']
        .map(e => e['values'])
        .map(values => new Stop(values[2]['value'], values[1]['value'], values[0]['value'], values[4]['value'], values[5]['value'], values[6]['value']));
    };

    //function get lines from stop
    async getLines(id, stopNr){
        let endpointUrl = `action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${id}&busstopNr=${stopNr}&apikey=${this.apiKey}`
        const endpoint = `${this.baseUrl}${endpointUrl}`
        const result = await fetch(endpoint);
        const data = await result.json();

        //function display tram and bus div and insert there list of lines from this stop
        return data['result'].map(el => el['values'][0]['value']);                        
    }

    async getVehicles(type, line){
        const url = `${this.baseUrl}${this.vehiclesUrl}${this.apiKey}&type=${type}&line=${line}`;
        const data = await fetch(url)
            .then(response => response.json())
            .then(result => result['result']);

        return data.map(element => {
                return new Vehicle(element['Lines'],
                    element['VehicleNumber'],
                    element['Brigade'],
                    element['Lat'],
                    element['Lon'],
                    element['Time'])
            }) 
    }
}
