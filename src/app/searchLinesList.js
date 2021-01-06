
export const linesList = (api) => {
    const apiKey = api;
    let stopNr;
    let stopName;
    const input = document.getElementById("FindStop");
    const btn = document.getElementById("searchStop");

    btn.addEventListener("click", () => {
    getBusDataFromInput();
    removeElementsByClass('elementOfList');
    });

    function getBusDataFromInput() {
    stopName = encodeURI(input.value.slice(0, input.value.length - 3));
    stopNr = input.value.slice(input.value.length - 2, input.value.length);
    const endPoint = `https://api.um.warszawa.pl/api/action/dbtimetable_get/?id=b27f4c17-5c50-4a5b-89dd-236b282bc499&name=${stopName}&apikey=${apiKey}`;
    fetch(endPoint)
        .then(response => response.json())
        .then(data => [...data.result])
        .then(data => data[0].values[0].value)
        .then(id => {
        const endpoint = `https://api.um.warszawa.pl/api/action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${id}&busstopNr=${stopNr}&apikey=${apiKey}`;


        fetch(endpoint)
            .then(response => (response.ok ? response.json() : undefined))
            .then(data => [...data.result])
            .then(array => array.map(el => el.values[0].value))
            .then(data =>
            data.forEach(element => {

                let para = document.createElement("P");
                para.classList.add("elementOfList");
                if (element > 100 || element[0] === "N") {
                para.innerHTML = element;
                document.getElementById("busList").appendChild(para);
                } else {
                para.innerHTML = element;
                document.getElementById("tramList").appendChild(para);
                }
            })
            )
            .catch(errorMessage => console.log(errorMessage));
        });
    }

    function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}         

              

              
