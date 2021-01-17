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
            if (this.verifyVehicleType(element) =='bus') {
                busList.appendChild(para);
                } 
            else if(this.verifyVehicleType(element) == 'tram') {
                tramList.appendChild(para);
                }
            else {
                return null
            }
        });  
    }

    verifyVehicleType(line){
        if (line >= 100 || line[0] === "N" || line[0] === "L" || line[0] === "E"){
            return 'bus';
        } else if(line > 0 && line <100){
            return 'tram';
        } else {
            return 'other';
        }
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
        
}

