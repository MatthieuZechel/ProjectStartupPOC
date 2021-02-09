import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import {MatDialog} from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UpdateTimeDialogComponent } from '../user/update-time-dialog/update-time-dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  userId: string;
  event = { }
  events = [];

  constructor(public dialog: MatDialog, private userService: UserServiceService) { }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    //dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this), // bind is important!
    height: '80vh',
    events: [
      { title: 'event 1', date: '2021-02-08' },
      { title: 'event 2', date: '2021-02-10' },
      { title: 'Soutenance', start: '2021-02-08T10:30:00', end: '2021-02-08T11:30:00'},
      { title: 'Soutenance', start: '2021-02-08T16:30:00', end: '2021-02-08T18:30:00'},
      { title: 'Soutenance', start: '2021-02-08T08:30:00', end: '2021-02-08T09:30:00'}
    ]
  };

  handleEventClick(arg) {
    console.log(arg)
    //alert('event click! ' + arg)

    const dialogRef = this.dialog.open(UpdateTimeDialogComponent, {data: {dataKey: arg } } );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };

  ngOnInit(): void {

        
    this.userId = sessionStorage.getItem("Id");
    
    this.userService.sendGetTimeUserRequest(this.userId).subscribe((data: any = [])=>{
      console.log(data);
      
    })
    
  }

}
