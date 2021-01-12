import AutoComplete from '../../node_modules/@tarekraafat/autocomplete.js/dist/js/autoComplete';

export class SearchManager {

    // The autoComplete.js Engine instance creator
    searchManager = new AutoComplete({
        name: "Stops",
        data: {
            src: async function () {
                // Loading placeholder text
                document
                    .querySelector("#autoComplete")
                    .setAttribute("placeholder", "Znajdź przystanek");

                let data = await JSON.parse(window.localStorage.stopsList);
                data = await data.map(s => s = {...s, ...{Nazwa : `${s.name} ${s.number}`}})
                // Returns Fetched data
                return data;
            },
            key: ["Nazwa"],
            results: (list) => {
                // Filter duplicates
                const filteredResults = Array.from(
                    new Set(list.map((value) => value.match))
                ).map((stop) => {
                    return list.find((value) => value.match === stop);
                });

                return filteredResults;
            }
        },
        trigger: {
            event: ["input", "focus"]
        },
        placeHolder: "Znajdź przystanek",
        searchEngine: "strict",
        highlight: true,
        maxResults: 500,
        resultItem: {
            content: (data, element) => {
                // Prepare Value's Key
                const key = Object.keys(data.value).find(
                    (key) => data.value[key] === element.innerText
                );
                // Modify Results Item
                element.style = "display: flex; justify-content: space-between;";
                element.innerHTML = `<span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
                ${element.innerHTML}</span>
                <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
                ${key}</span>`;
            }
        },
        noResults: (dataFeedback, generateList) => {
            // Generate autoComplete List
            generateList(this.searchManager, dataFeedback, dataFeedback.results);
            // No Results List Item
            const result = document.createElement("li");
            result.setAttribute("class", "no_result");
            result.setAttribute("tabindex", "1");
            result.innerHTML = `<span>Brak wyników dla zapytania "${dataFeedback.query}"</span>`;
            document
                .querySelector(`#${this.searchManager.resultsList.idName}`)
                .appendChild(result);
        },
        onSelection: (feedback) => {
            document.querySelector("#autoComplete").blur();
            // Prepare User's Selected Value
            const selection = feedback.selection.value[feedback.selection.key];
            // Render selected choice to selection div
            // document.querySelector(".selected-stop").innerHTML = selection;
            // Replace Input value with the selected value
            document.querySelector("#autoComplete").value = selection;
            // Console log autoComplete data feedback
            console.log(feedback.selection.value);
        }
    });

}