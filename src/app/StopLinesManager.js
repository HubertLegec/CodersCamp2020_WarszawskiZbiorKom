export class StopLinesManager {

    constructor(linesTableContainerId, arrOfTransports) {
        this.linesTableContainerId = linesTableContainerId;
        this.arrOfTransports = arrOfTransports;
    }

    createLinesTable() {
        this.removeLinesTable('linesList');

        const linesDiv = document.createElement('div');
        linesDiv.id = 'linesList';
        document.getElementById(this.linesTableContainerId).append(linesDiv);
        this.displayLines(this.arrOfTransports);

        return linesDiv;
    }

    addClickHandler(handler) {
        this.clickHandler = handler;
    }

    //function add two divs (tram/bus list) and append there lines from this stop
    displayLines(arrOfTransports) {
        let parent = document.getElementById('linesList');

        let buttons = document.createElement('div');
        buttons.classList.add('switch-buttons');

        let busesButton = document.createElement('button');
        busesButton.setAttribute('id', 'busesButton');
        busesButton.addEventListener('click', () => this.switchActive('busList'));
        let tramsButton = document.createElement('button');
        tramsButton.setAttribute('id', 'tramsButton');
        tramsButton.addEventListener('click', () => this.switchActive('tramList'));
        buttons.appendChild(busesButton);
        buttons.appendChild(tramsButton);
        parent.appendChild(buttons);
        
        let tramList = document.createElement('div');
        tramList.classList.add('list');
        tramList.setAttribute('id', 'tramList');
        let busList = document.createElement('div');
        busList.classList.add('list');
        busList.setAttribute('id', 'busList');

        let bTitlePara = document.createElement('p');
        bTitlePara.innerHTML = 'Lista Autobusów';
        busList.appendChild(bTitlePara);
        let tTitlePara = document.createElement('p');
        tTitlePara.innerHTML = 'Lista Tramwajów';
        tramList.appendChild(tTitlePara);
        

        //check number of line and add to adequate div
        arrOfTransports.forEach(element => {
            let para = document.createElement("button");
            para.classList.add("elementOfList");
            para.textContent = element;
            para.addEventListener('click', () => this.clickHandler(element));
            if (this.verifyVehicleType(element) === 'bus') {
                busList.appendChild(para);
            }
            else if (this.verifyVehicleType(element) === 'tram') {
                tramList.appendChild(para);
            }
            else {
                return null
            }
        });
        if(busList.childElementCount <= 1){
            busList.classList.add('empty');
            busList.innerText = 'Brak wyników';
        }
        else{
            busList.classList.add('active');
        }
        if(tramList.childElementCount <= 1){
            tramList.classList.add('empty');
            tramList.innerText = 'Brak wyników';
        }
        else{
            tramList.classList.add('active');
        }

        parent.appendChild(busList);
        parent.appendChild(tramList);
        
    }

    verifyVehicleType(line) {
        if (line >= 100 || line[0] === "N" || line[0] === "L" || line[0] === "E") {
            return 'bus';
        } else if (line > 0 && line < 100) {
            return 'tram';
        } else {
            return 'other';
        }
    }

    //function remove lines of old search
    removeLinesTable(id) {
        const element = document.getElementById(id);
        if (element) {
            element.parentNode.removeChild(element);
        }
    }

    switchActive(name) {
        Array.from(document.querySelectorAll('#linesList .list')).map((el) => el.classList.remove('active'));
        document.getElementById(name).classList.add('active');
        document.getElementById('timetable').innerHTML = '';
    }

}

