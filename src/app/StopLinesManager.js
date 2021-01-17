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
                busList.appendChild(para);
                } 
            else if(element > 0 && element <100) {
                tramList.appendChild(para);
                }
            else {
                return null
            }
        });
        
    }
    //function remove lines of old search
    removeLinesTable(id){
        const element = document.getElementById(id);
        if(element){
            element.parentNode.removeChild(element);
        }         
    }
        
}

