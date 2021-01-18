import {Stop} from './Stop';
export class ApiClient {
    constructor(baseUrl, apiKey){
        this.baseUrl = baseUrl;
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

    async getTimetable (id, stopNr, lineNr, displayTimetable){
        let endpointUrl = `action/dbtimetable_get/?id=e923fa0e-d96c-43f9-ae6e-60518c9f3238&busstopId=${id}&busstopNr=${stopNr}&line=${lineNr}&apikey=213a69a2-30fb-4d1e-b819-aa1b5c02f3c6`
        let endpoint = `https://api.um.warszawa.pl/api/${endpointUrl}`
        const result = await fetch(endpoint);
        const data = await result.json();
        let wrongApiTimetable = data.result.map(el => el.values[5].value.slice(0,5))
        let apiTimetable = []
        wrongApiTimetable.map(el =>{
            let hour = el.slice(0,2);
            let minutes = el.slice(2,el.length);
            if(hour>=24){
               hour = el.slice(0,2)
               hour -= 24
            }
            el = `${hour}${minutes}`
            apiTimetable.push(el)
        })
        return apiTimetable
    }

}  





