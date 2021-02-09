import { Component, OnInit, ViewChild, Input } from '@angular/core';
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

  event: any = {}
  events: any = []
  userId: string;

  constructor(public dialog: MatDialog, private userService: UserServiceService) { }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    //dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this), // bind is important!
    height: '80vh'
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
      this.events = []
      
      for (let i = 0; i < data.length ; i++) {
        
        this.event.title = data[i].project.name;
        this.event.id = data[i].id;
        this.event.start = data[i].startDate;

        // end date
        var endDate = new Date( data[i].startDate );
        endDate.setHours( endDate.getHours() + data[i].duree );
        this.event.end = endDate.toJSON();

        this.events.push(this.event);
        this.event = [];

        //console.log("event", this.event)
        //console.log( "events", this.events)
      }

      this.calendarOptions.events = this.events;

    })
  }

}
