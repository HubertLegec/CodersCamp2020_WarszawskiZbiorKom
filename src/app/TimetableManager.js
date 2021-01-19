export class TimetableManager {
    constructor(timetableContainerId, arrivalTimesList) {
        this.timetableContainerId = timetableContainerId;
        this.arrivalTimesList = arrivalTimesList;
    }

    createTimetable(){
        this.clearTimetable('timetable');
        const container = document.getElementById(this.timetableContainerId);
        const timetable = this.displayTimetable();
        container.append(timetable);
    }

    displayTimetable(){
        const timetable = document.createElement('div');
        timetable.id = 'timetable';

        this.arrivalTimesList.forEach(e => {
            console.log(e);
            const hourRow = document.createElement('div');
            hourRow.classList.add('hour-row');
            const hourSpan = document.createElement('span');
            hourSpan.classList.add('hour');
            if(e.hour >= 24){
                e.hour-= 24;
                e.hour = '0' + e.hour;
            }
            hourSpan.innerText = e.hour;
            hourRow.append(hourSpan);
            const minutesRow = document.createElement('div');
            e.minutes.map((m) => {
                const minuteSpan = document.createElement('span');
                minuteSpan.classList.add('minute');
                minuteSpan.innerText = m;
                minutesRow.append(minuteSpan);
            });
            hourRow.append(minutesRow);
            timetable.append(hourRow);        
        })
        
        return timetable;
    }

    clearTimetable(id){
        const element = document.getElementById(id);
        if(element){
            element.parentNode.removeChild(element);
        }
    }


}