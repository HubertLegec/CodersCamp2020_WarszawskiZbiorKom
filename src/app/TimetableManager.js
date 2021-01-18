export class TimetableManager {
    constructor(timetableContainerId, arrivalTimesList) {
        this.timetableContainerId = timetableContainerId;
        this.arrivalTimesList = arrivalTimesList;
    }

    createTimetable(){
        this.removeTimetable('timetable');
        const container = document.getElementById(this.timetableContainerId);
        const timetable = this.displayTimetable();
        container.append(timetable);
    }

    displayTimetable(){
        const timetable = document.createElement('div');
        timetable.id = 'timetable';

        const hourColumn = document.createElement('div');
        hourColumn.id = 'hourColumn';
        const minutesColumn = document.createElement('div');
        minutesColumn.id = 'minutesColumn';
        timetable.append(hourColumn);
        timetable.append(minutesColumn);

        this.arrivalTimesList.forEach(e => {
            const hourRow = document.createElement('div');
            if(e.hour >= 24){
                e.hour-= 24;
                e.hour = '0' + e.hour;
            }
            hourRow.innerText = e.hour;
            hourColumn.append(hourRow);
            const minutesRow = document.createElement('div');
            minutesRow.innerText = e.minutes.join(' ');
            minutesColumn.append(minutesRow);            
        })
        
        return timetable;
    }

    removeTimetable(id){
        const element = document.getElementById(id);
        if(element){
            element.parentNode.removeChild(element);
        }
    }


}