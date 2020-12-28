export const App = ({options}) => {
    const stopsList = [];
    let uniqueStopsList = [];
    const url = `${options.wawApiBaseUrl}${options.wawApiAllStops}&apikey=${options.wawApiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => stopsList.push(...data.result))
    .then(() => {
        for(let stop of stopsList){ 
            // place in api with bus/tram stop name  
            let stopName = stop['values'][2]['value'];
            // checking for unique names
            uniqueStopsList.indexOf(stopName) < 0 ? uniqueStopsList.push(stopName) : false;
        }
    })
    .then(() => uniqueStopsList = uniqueStopsList.sort((a, b) => a.localeCompare(b)))
    .then(() => {
        // html datalist element
        const allStops = document.getElementById('AllStops');
        // creating datalist options
        for(let unique of uniqueStopsList){
            let option = document.createElement('option');
            option.value = unique;
            allStops.append(option);
        }
    });   
}
