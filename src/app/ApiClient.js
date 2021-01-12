import {Stop} from './Stop';
import {DOMModifier} from './DOMModifier';
const domModifier = new DOMModifier();
export class displayTransportLines{
    constructor(api, baseUrl, urlGetId){
        this.api = api;
        this.baseUrl = baseUrl;
        this.urlGetId = urlGetId
    }

    linesList = () => {
    const btn = document.getElementById("searchStop");
    btn.addEventListener("click", () => {
        domModifier.removeElementsByClass('elementOfList')
        //function convert stopName to stopId
        this.getBusDataFromInput(this.api, this.baseUrl, this.urlGetId)
        });
    }   

    /*
    function will be removed after refactor function with list of all stops
    After refactoring fuction should return object width id and stopNr
    */
    async getBusDataFromInput(apiKey, baseUrl, urlGetId) {
        const input = document.getElementById("FindStop");
        let stopName = encodeURI(input.value.slice(0, input.value.length - 3));
        let stopNr = input.value.slice(input.value.length - 2, input.value.length);
        const endpointUrl = `${urlGetId}${stopName}&apikey=${apiKey}`;
        const endPoint = `${baseUrl}${endpointUrl}`;        
        try{
            const result = await fetch(endPoint)
            const data = await result.json();
            this.getLines(data.result[0].values[0].value, stopNr, apiKey, baseUrl) //function receive id, stopNr, apiKey, baseUrl and return list of lines on this stop
            return data.result[0].values[0].value;
        }
        catch (e) {
            return null
        }
    }

    /*
    function will be refactored after refactor of function with list of all stops
    Functionality will be same, but replace "id", "stopNr" and "apiKey" with one property 
    */
    async getLines(id, stopNr, apiKey, baseUrl){
        const endpoint = `${baseUrl}action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${id}&busstopNr=${stopNr}&apikey=${apiKey}`;
        try{
            const result = await fetch(endpoint)
            const data = await result.json();
            let arrOfTransports = data.result.map(el => el.values[0].value);
            domModifier.displayLines(arrOfTransports) //function display tram and bus div and insert there list of lines from this stop
            return arrOfTransports
            }
        catch (e){
            return null
        }                            
    }
}
export class ApiClient {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async getStops(endpointUrl) {        
        const response = await fetch(`${this.baseUrl}${endpointUrl}`);
        const data = await response.json();
                
        return data['result']
        .map(e => e['values'])
        .map(values => new Stop(values[2]['value'], values[1]['value'], values[0]['value'], values[4]['value'], values[5]['value'], values[6]['value']));
    };

}  





