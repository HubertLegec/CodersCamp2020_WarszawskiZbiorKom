export const linesList = (api) => {
    const apiKey = api;
    btn.addEventListener("click", () => {
        removeElementsByClass('elementOfList')
        getBusDataFromInput(apiKey)
    });
}

const input = document.getElementById("FindStop");
const btn = document.getElementById("searchStop");
    async function getBusDataFromInput(apiKey) {
        let stopName = encodeURI(input.value.slice(0, input.value.length - 3));
        let stopNr = input.value.slice(input.value.length - 2, input.value.length);
        const endPoint = `https://api.um.warszawa.pl/api/action/dbtimetable_get/?id=b27f4c17-5c50-4a5b-89dd-236b282bc499&name=${stopName}&apikey=${apiKey}`;
        try{
            const result = await fetch(endPoint)
            const data = await result.json();
            getLines(data.result[0].values[0].value, stopNr, apiKey) //run new function
            return data.result[0].values[0].value;
        }
        catch (e) {
            return null
        }
    }

    async function getLines(id, stopNr, apiKey){
        let arr = []
        const endpoint = `https://api.um.warszawa.pl/api/action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${id}&busstopNr=${stopNr}&apikey=${apiKey}`;
        try{
            const result = await fetch(endpoint)
            const data = await result.json();
            let arr = data.result.map(el => el.values[0].value)
            displayLines(arr) // run new function
            return data.result[0].values[0].value;
            }
        catch (e){
            return null
        }                            
    }

    function displayLines(arr){
        arr.forEach(element => {
            let para = document.createElement("P");
            para.classList.add("elementOfList");
            para.innerHTML = element;
            if (element > 100 || element[0] === "N") {
            document.getElementById("busList").appendChild(para);
            } else {
            document.getElementById("tramList").appendChild(para);
            }
        })
    }

    function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
export {getBusDataFromInput};
export {getLines};

