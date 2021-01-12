export class DOMModifier {
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

