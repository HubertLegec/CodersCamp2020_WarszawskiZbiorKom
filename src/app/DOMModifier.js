export class DOMModifier {

    createStopsDatalist(datalistElement, stopsList) {
            // creating datalist options
            for (let element of stopsList) {
            let option = document.createElement('option');
            option.value = `${element.name} ${element.number}`;
            datalistElement.append(option);
        }
        
    }

}