export class DOMModifier {

    createStopsDatalist(datalistId, stopsList) {
        const datalist = document.getElementById(datalistId);

        // creating datalist options
        for (let element of stopsList) {
            let option = document.createElement('option');
            option.value = `${element.name} ${element.number}`;
            datalist.append(option);
        }
    }

}