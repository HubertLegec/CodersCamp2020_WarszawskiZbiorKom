export const App = ({ options}) => {
    const uniqueStopsList = [];
    const url = `${options.wawApiBaseUrl}${options.wawApiAllStops}&apikey=${options.wawApiKey}`;

    function createDatalist(datalistId, arrayOfOptions) {
        const datalist = document.getElementById(datalistId);

        // creating datalist options
        for (let element of arrayOfOptions) {
            let option = document.createElement('option');
            option.value = element;
            datalist.append(option);
        }
    }

    function populateStorage(itemName, item) {

        if (!localStorage.getItem(itemName)) {
            localStorage.setItem(itemName, item);
        }

    }

    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    async function createStopsList() {

        const data = await getData(url);
        populateStorage('stopsList', JSON.stringify(data));

        for (let stop of JSON.parse(localStorage.getItem('stopsList'))['result']) {
            // place in api with bus/tram stop name  
            let stopName = stop['values'][2]['value'];
            // checking for unique names
            uniqueStopsList.indexOf(stopName) < 0 ? uniqueStopsList.push(stopName) : false;
        }

        uniqueStopsList.sort((a, b) => a.localeCompare(b));
        createDatalist('AllStops', uniqueStopsList);
    }

    createStopsList();

}