export class PanelManager{

    constructor(panelConteinerId){
        this.panelConteinerId = panelConteinerId;
    }

    createPanel(){
        const panelContainer = document.createElement('div');
        panelContainer.id = 'panel';
        document.getElementById(this.panelConteinerId).append(panelContainer);
    }

    removeElement(elementId){
        if(document.getElementById(elementId)){
            document.getElementById(elementId).remove();
        }
    }
}