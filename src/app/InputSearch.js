export class InputSearch {

    createInput = () => {
        let input = document.createElement('input');
        input.id = 'autoComplete';
        input.type = 'search';
        document.querySelector('#zbiorkom-app').append(input);
    }
}