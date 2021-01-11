export class DOMModifier {

    displayLines(listOfTransports){              
        let parent = document.getElementById('linesList');
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

        listOfTransports.forEach(element => {
            let para = document.createElement("p");
            para.classList.add("elementOfList");
            para.innerHTML = element;
            if (element >= 100 || element[0] === "N") {
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

    removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);         
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }        
    }
}