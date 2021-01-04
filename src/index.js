// import 'regenerator-runtime/runtime' //async/await with Parcel
// import {App} from "./app/App";

// const WAW_API_BASE_URL = process.env.WAW_API_BASE_URL || "https://api.um.warszawa.pl/api";


// window.onload = () => App({options: {wawApiBaseUrl: WAW_API_BASE_URL}})



let busStopId = window.prompt("Podaj identyfikator przystanku:");
let busStopNr = window.prompt("Podaj identyfikator słupka:");
let stopName;
const input = document.getElementById('FindStop')
input.addEventListener('keyup', () => {
    stopName = input.value
})
    const endpoint =
    `https://api.um.warszawa.pl/api/action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=${busStopId}&busstopNr=${busStopNr}&apikey=213a69a2-30fb-4d1e-b819-aa1b5c02f3c6`;

              
    fetch(endpoint)
        .then(response => response.ok ? response.json() : undefined)
        .then(data => [...data.result])
        .then(array => array.map(el => el.values[0].value))
        .then(data => data.forEach(element =>{
            let para = document.createElement("P");
            para.classList.add("elementOfList")
            if(element > 100 || element[0] === "N"){
                para.innerHTML = element + ` autobus`
                document.getElementById("busList").appendChild(para)
            }else {
                para.innerHTML = element + ` tramwaj`
                document.getElementById("tramList").appendChild(para)
            }
        }))
        .catch(errorMessage => console.log(errorMessage));


            

              

              
