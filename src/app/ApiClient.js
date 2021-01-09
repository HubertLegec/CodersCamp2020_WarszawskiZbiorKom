import {Stop} from './Stop';
export class ApiClient {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async getStops(endpointUrl) {
        const stopsList = [];
        
        const response = await fetch(`${this.baseUrl}${endpointUrl}`);
        const data = await response.json();
                
        data['result'].forEach(element => {
            const stop = new Stop(element['values'][2]['value'], element['values'][1]['value'], element['values'][0]['value'], element['values'][4]['value'], element['values'][5]['value'], element['values'][6]['value']);
            stopsList.push(stop);
        });


        return stopsList.sort((a, b) => a.name.localeCompare(b.name));
    }

}