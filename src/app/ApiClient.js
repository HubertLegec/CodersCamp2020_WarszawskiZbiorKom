import {DOMModifier} from './DOMModifier';
const domModifier = new DOMModifier();
export const linesList = (api, apiUrl) => {
    const btn = document.getElementById("searchStop");
    btn.addEventListener("click", () => {
        domModifier.removeElementsByClass('elementOfList')
        getBusDataFromInput(api, apiUrl)
    });
}
async function getBusDataFromInput(apiKey, apiUrl) {
    const input = document.getElementById("FindStop");
    let stopName = encodeURI(input.value.slice(0, input.value.length - 3));
    let stopNr = input.value.slice(input.value.length - 2, input.value.length);
    const endPoint = `${apiUrl}action/dbtimetable_get/?id=b27f4c17-5c50-4a5b-89dd-236b282bc499&name=${stopName}&apikey=${apiKey}`;
    try{
        const result = await fetch(endPoint)
        const data = await result.json();
        getLines(data.result[0].values[0].value, stopNr, apiKey, apiUrl) //run new function
        return data.result[0].values[0].value;
    }
    catch (e) {
        return null
    }
}

async function getLines(id, stopNr, apiKey, apiUrl){
    const endpoint = `${apiUrl}action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${id}&busstopNr=${stopNr}&apikey=${apiKey}`;
    try{
        const result = await fetch(endpoint)
        const data = await result.json();
        let listOfTransports = data.result.map(el => el.values[0].value);
        domModifier.displayLines(listOfTransports) // run new function                 
        return listOfTransports
        }
    catch (e){
        return null
    }                            
}
    
export {getBusDataFromInput};
export {getLines};

