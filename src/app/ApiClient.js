import {Stop} from './Stop';
export class ApiClient {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async getStops() {
        const endpointUrl = 'action/dbstore_get/?id=ab75c33d-3a26-4342-b36a-6e5fef0a3ac3&sortBy=id&apikey=66b60069-cff2-418b-a9a9-4a64cfc17443'
        const stopsList = [];
        
        const response = await fetch(`${this.baseUrl}${endpointUrl}`);
        const data = await response.json();
                
        data['result'].forEach(element => {
            const stop = new Stop(element['values'][2]['value'], element['values'][1]['value'], element['values'][0]['value'], element['values'][4]['value'], element['values'][5]['value'], element['values'][6]['value']);
            stopsList.push(stop);
        });


        return stopsList.sort((a, b) => a.name.localeCompare(b.name));
    }

    async getStopLines(stop){
        const endpointUrl = `action/dbtimetable_get?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${stop.id}&busstopNr=${stop.number}&apikey=66b60069-cff2-418b-a9a9-4a64cfc17443`;
        const stopLinesList = [];

        const response = await fetch(`${this.baseUrl}${endpointUrl}`);
        const data = await response.json();

        data['result'].forEach(element => stopLinesList.push(element['values'][0]['value']));

        return stopLinesList;
    }

}