import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor() { }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    height: '80vh',
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  };

  ngOnInit(): void {
    //this.calendarComponent.getApi().updateSize();
  }

}
