export class DOMModifier {

    createSortedStopsDatalist(datalistId, stopList) {
        // creating datalist options
        const datalist = document.getElementById(datalistId);

        stopList
        // canceled bus stops
        .filter(s => s.name !== '') 
        .map(s => `${s.name} ${s.number}`)
        .sort((s1, s2) => s1.localeCompare(s2))
        .map(s => {
            const option = document.createElement('option');
            option.value = s;
            datalist.append(option)
        });
    }
        
}
