export class StopLinesManager {
    
    constructor(buttonContainerId, arrOfTransports){
        this.buttonContainerId = buttonContainerId;
        this.arrOfTransports = arrOfTransports;
    }
    
    createButton() {
        const button = document.createElement('button')
        button.setAttribute('type', 'submit');
        button.id = 'searchStop';
        button.innerText = 'Szukaj linii';

        button.addEventListener("click", async () =>{
            this.createLinesTable();
            this.removeElementsByClass("elementOfList")
            this.displayLines(this.arrOfTransports);
        });

        document.getElementById(this.buttonContainerId).append(button);
        return button;
    }
    createTimetableButton(id, stopNr, getTimetable) {
        const buttonTimetable = document.createElement('button')
        buttonTimetable.setAttribute('type', 'submit');
        buttonTimetable.id = 'buttonTimetable';
        buttonTimetable.innerText = 'Wyświetl rozkład';
        document.getElementById(this.buttonContainerId).append(buttonTimetable);

        buttonTimetable.addEventListener("click", async () =>{
            this.removeElementsByClass('elementOfTimetable')
            let timetableLine = document.getElementById('inputTimetable').value;
            let apiTimetable = await getTimetable(id, stopNr, timetableLine)
            this.displayTimetable(apiTimetable)
            return timetableLine
        });
        return buttonTimetable;
    }

    createLinesTable() {
        const linesDiv = document.createElement('div');
        linesDiv.id = 'linesList';
        linesDiv.classList.add('linesList');

        document.getElementById(this.buttonContainerId).append(linesDiv);
        return linesDiv;
    }

    //function add two divs (tram/bus list) and append there lines from this stop
    displayLines(arrOfTransports){              
        let parent = document.getElementById('linesList');
        //check count of children of div and optionally add tram and bus list
        if(parent.childElementCount == 0 ){
            let tramList = document.createElement('div');
            tramList.classList.add('list');
            tramList.setAttribute('id', 'tramList');
            let tTitlePara = document.createElement('p');
            tTitlePara.innerHTML = 'Lista Tramwajów';
            tramList.appendChild(tTitlePara);

            let busList = document.createElement('div');
            busList.classList.add('list');
            busList.setAttribute('id', 'busList');
            let bTitlePara = document.createElement('p');
            bTitlePara.innerHTML = 'Lista Autobusów';
            busList.appendChild(bTitlePara);

            parent.appendChild(tramList);
            parent.appendChild(busList);
        }
        //check number of line and add to adequate div
        arrOfTransports.forEach(element => {
            let para = document.createElement("p");
            para.classList.add("elementOfList");
            para.innerHTML = element;
            if (element >= 100 || element[0] === "N" || element[0] === "L" || element[0] === "E") {
                para.setAttribute("data-testid", "bus")
                busList.appendChild(para);
                } 
            else if(element > 0 && element <100) {
                para.setAttribute("data-testid", "tram")
                tramList.appendChild(para);
                }
            else {
                return null
            }
        });
        
    }
    //function remove lines of old search
    removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);         
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }        
    }

    createSortedStopsDatalist(datalistId, stopList) {
            // creating datalist options
        const datalist = document.getElementById(datalistId);

        stopList.map(s => `${s.name} ${s.number}`)
        .sort((s1, s2) => s1.localeCompare(s2))
        .map(s => {
            const option = document.createElement('option');
            option.value = s;
            return option;
        })
        .forEach(opt => datalist.append(opt));
    }
    displayTimetableDatalist(){              
        let parent = document.getElementById(this.buttonContainerId);

        let timetable = document.createElement('datalist')
        timetable.setAttribute('id', 'timetable')
        timetable.classList.add('timetableDatalist')

        let label = document.createElement('label')            
        label.setAttribute("for","timetableChoice");
        label.textContent = "Wybierz numer linii:"

        let inputTimetable = document.createElement('input')
        inputTimetable.setAttribute("list","timetable");
        inputTimetable.setAttribute('id', 'inputTimetable');
        inputTimetable.setAttribute('name', 'timetableChoice')

        parent.appendChild(timetable)
        parent.appendChild(label)
        parent.appendChild(inputTimetable)
        
        var lines = '';
        for (var i = 0; i < this.arrOfTransports.length; i++) {
            lines += '<option value="' + this.arrOfTransports[i] + '" />';
        }
        document.getElementById('timetable').innerHTML=lines
    }
    
    displayTimetable(apiTimetable){
        let parent = document.getElementById(this.buttonContainerId);
        let hoursTimetable = []
        apiTimetable.map( el =>{
            let hour = el.slice(0,2)
            hoursTimetable.push(hour)
        })
        let uniqueHoursTimetable = [...new Set(hoursTimetable)]
        console.log(uniqueHoursTimetable)
        if(document.getElementsByClassName('timetable').length === 0)
        {
            const timetable = document.createElement('div')
            timetable.classList.add('timetable')
            timetable.id = 'timetable';
            timetable.innerHTML = `<div class="timetableTitle" , id="timetableTitle">
            <h3>Rozkład jazdy</h3>
        </div>
        <div class="timetableTimes">
            <div class="timetableHours" , id="timetableTimes">
                Godziny
            </div>
            <div class="timetableMinutes" , id="timetableTimes">
                Minuty
            </div>
        </div>`
            parent.appendChild(timetable)
        }

        let parentHours = document.getElementsByClassName('timetableHours');
        
        for(let i = 0; i<uniqueHoursTimetable.length; i++){
            // console.log(uniqueHoursTimetable[i])
            let para = document.createElement("p");
            para.classList.add("elementOfHoursTable");
            para.innerHTML = uniqueHoursTimetable[i];
            parentHours.appendChild(para)
        }
    }
    
        
}

