export class PanelManager{

    constructor(panelContainerId){
        this.panelContainerId = panelContainerId;
    }

    createPanel(){
        const panelContainer = document.createElement('div');
        panelContainer.id = 'panel';
        document.getElementById(this.panelContainerId).append(panelContainer);
    }

    removeElement(elementId){
        if(document.getElementById(elementId)){
            document.getElementById(elementId).remove();
        }
    }
}