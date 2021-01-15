import AutoComplete from '../../node_modules/@tarekraafat/autocomplete.js/dist/js/autoComplete';
import { StorageManager } from './StorageManager';


export class SearchManager {

  constructor(inputContainerId, getStops) {
    this.inputContainerId = inputContainerId;
    this.getStops = getStops;
  }

  createInput() {
    const input = document.createElement('input');
    input.id = 'autoComplete';
    input.type = 'text';

    document.getElementById(this.inputContainerId).append(input);
    this.autoComplete();
    return input;
  }

  // The autoComplete.js Engine instance creator
  autoComplete() {
    const autoComplete = new AutoComplete({
      name: 'Stops',
      data: {
        src: async () => {
          // Loading placeholder text
          document
            .querySelector('#autoComplete')
            .setAttribute('placeholder', 'Znajdź przystanek');
          return this.getStops()
            .map(s => ({ ...s, fullName: `${s.name} ${s.number}` }))
            .sort((s1, s2) => s1.fullName.localeCompare(s2.fullName));
        },
        key: ['fullName'],
        results: (list) => {
          // Filter duplicates
          const filteredResults = Array.from(
            new Set(list.map((value) => value.match)),
          ).map((stop) => {
            return list.find((value) => value.match === stop);
          });
          return filteredResults;
        },
      },
      trigger: {
        event: ['input', 'focus'],
      },
      query: {
        manipulate: (query) => {
          // remove polish accents/diacritics
          return query;//.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        },
      },
      cache: true,
      placeHolder: 'Znajdź przystanek',
      threshold: 1,
      searchEngine: 'strict', // "loose"
      highlight: true,
      maxResults: 1000,
      diacritics: false,
      resultItem: {
        content: (data, element) => {
          // Prepare Value's Key
          const key = Object.keys(data.value).find(
            (key) => data.value[key] === element.innerText,
          );
          // Modify Results Item
          element.style = 'display: flex; justify-content: space-between;';
          element.innerHTML = `<span style='text-overflow: ellipsis; white-space: nowrap; overflow: hidden;'>
                ${element.innerHTML}</span>
                <span style='display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);'>
                Nazwa przystanku</span>`;
        },
      },
      noResults: (dataFeedback, generateList) => {
        // Generate autoComplete List
        generateList(autoComplete, dataFeedback, dataFeedback.results);
        // No Results List Item
        const result = document.createElement('li');
        result.setAttribute('class', 'no_result');
        result.setAttribute('tabindex', '1');
        result.innerHTML = `<span>Brak wyników</span>`;
        document
          .querySelector(`#${autoComplete.resultsList.idName}`)
          .appendChild(result);
      },
      onSelection: (feedback) => {
        document.querySelector('#autoComplete').blur();
        // Prepare User's Selected Value
        const selection = feedback.selection.value[feedback.selection.key];
        // Render selected choice to selection div
        // document.querySelector(".selected-stop").innerHTML = selection;
        // Replace Input value with the selected value
        document.querySelector('#autoComplete').value = selection;
        // Console log autoComplete data feedback
        return feedback.selection.value;
      },
    });
    return autoComplete;
  }
}
