import {loadMap} from "./Map";
export class DOMModifier {

    createSortedStopsDatalist(datalistId, stopList) {
            // creating datalist options
        const datalist = document.getElementById(datalistId);

        stopList.map(s => `${s.name} ${s.number}`)
        .sort((s1, s2) => s1.localeCompare(s2))
        .map(s => {
            const option = document.createElement('option');
            option.value = s;
            return option;
        })
        .forEach(opt => datalist.append(opt));
    }  
    
    map = loadMap;
}
