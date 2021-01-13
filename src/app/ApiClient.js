import {Stop} from './Stop';

export class createURL{
    //function create endpointURL which will be concatenned with baseURL
    createEndpointLines(id, stopNr, api){
        let endpointUrl = `action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${id}&busstopNr=${stopNr}&apikey=${api}`;
        return endpointUrl
    }
    
}
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
        console.log(endpoint)
        try{
            const result = await fetch(endpoint);
            
            const data = await result.json();
            console.log(data)
            //function display tram and bus div and insert there list of lines from this stop
            return data['result'].map(el => el['values'][0]['value']);
            }
        catch (e){
            return e;
        }                            
    }

}  





