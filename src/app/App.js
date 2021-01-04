export const App = ({options}) => {
    const stopsList = [];
    let uniqueStopsList = [];
    const url = `${options.wawApiBaseUrl}${options.wawApiAllStops}&apikey=${options.wawApiKey}`;

    async function createStopsList() {
        const response = await fetch(url);
        const data = await response.json();
        
        stopsList.push(...data['result']);

        for(let stop of stopsList){ 
            // place in api with bus/tram stop name  
            let stopName = stop['values'][2]['value'];

            // checking for unique names
            uniqueStopsList.indexOf(stopName) < 0 ? uniqueStopsList.push(stopName) : false;            
        }

        uniqueStopsList = uniqueStopsList.sort((a, b) => a.localeCompare(b));

        const allStops = document.getElementById('AllStops');
        // creating datalist options
        for(let unique of uniqueStopsList){
            let option = document.createElement('option');
            option.value = unique;
            allStops.append(option);
        }
    }

    createStopsList();

}
