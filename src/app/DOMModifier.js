export class DOMModifier {

    createSortedStopsDatalist(datalistId, stopsList) {
            // creating datalist options
            const datalist = document.getElementById(datalistId);
            stopsList.sort((a, b) => `${a.name} ${a.number}`.localeCompare(`${b.name} ${b.number}`));

            for (let element of stopsList) {
            const option = document.createElement('option');
            option.value = `${element.name} ${element.number}`;
            datalist.append(option);
        }
        
    }

}