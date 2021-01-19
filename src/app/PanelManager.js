export class PanelManager{

    constructor(panelContainerId){
        this.panelContainerId = panelContainerId;
    }

    createPanel(){
        const panelContainer = document.createElement('div');
        panelContainer.id = 'panel';
        
        const togglePanelButton = document.createElement('button');
        togglePanelButton.id = 'togglePanelButton';
        togglePanelButton.addEventListener('click', this.togglePanel);
        panelContainer.append(togglePanelButton);
        document.getElementById(this.panelContainerId).append(panelContainer);
    }

    removeElement(elementId){
        if(document.getElementById(elementId)){
            document.getElementById(elementId).remove();
        }
    }

    togglePanel(e){
        e.target.parentNode.classList.toggle('hidden');
    }
}