export class StopLinesManager {
    
    constructor(linesTableContainerId, arrOfTransports){
        this.linesTableContainerId = linesTableContainerId;
        this.arrOfTransports = arrOfTransports;
    }

    createLinesTable() {
        this.removeLinesTable('linesList');

        const linesDiv = document.createElement('div');
        linesDiv.id = 'linesList';
        document.getElementById(this.linesTableContainerId).append(linesDiv);
        this.displayLines(this.arrOfTransports)

        return linesDiv;
    }

    addClickHandler(handler){
        this.clickHandler = handler;
    }

    //function add two divs (tram/bus list) and append there lines from this stop
    displayLines(arrOfTransports){              
        let parent = document.getElementById('linesList');

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
        //check number of line and add to adequate div
        arrOfTransports.forEach(element => {
            let para = document.createElement("button");
            para.classList.add("elementOfList");
            para.textContent = element;
            para.addEventListener('click', () => this.clickHandler(element));
            if (this.verifyVehicleType(element) ==='bus') {
                busList.appendChild(para);
                } 
            else if(this.verifyVehicleType(element) === 'tram') {
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
    removeLinesTable(id){
        const element = document.getElementById(id);
        if(element){
            element.parentNode.removeChild(element);
        }         
    }
        
}

