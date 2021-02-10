import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import {MatDialog} from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UpdateTimeDialogComponent } from '../user/update-time-dialog/update-time-dialog.component';
import { AddTimeDialogComponent } from '../user/add-time-dialog/add-time-dialog.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent  implements OnInit, OnChanges {


  // private eventsSubscription: Subscription;

  // @Input() eventsReload: Observable<void> = new Observable;

  @Input() Onreload: boolean;

  @ViewChild(UpdateTimeDialogComponent) updateDialog;
  @ViewChild(AddTimeDialogComponent) AddDialog;

  event: any = {}
  events: any = []
  message:string;
  userId: string;

  constructor(public dialog: MatDialog, private userService: UserServiceService) { }

  calendarOptions: CalendarOptions = {
    timeZone: 'local',
    initialView: 'timeGridWeek',
    eventClick: this.handleEventClick.bind(this), // bind is important!
    height: '80vh'
  };

  handleEventClick(arg) {
    console.log(arg)

    const dialogRef = this.dialog.open(UpdateTimeDialogComponent, {data: {dataKey: arg } } );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };


  ngOnChanges(changes: SimpleChanges) {
    console.log("onchanges")
    this.reloadCalendar();
  }

  ngOnInit(): void {

    // this.eventsSubscription = this.eventsReload.subscribe(() => this.reloadCalendar());


    if(sessionStorage.getItem("profile") === ("manager")){
      this.userId = sessionStorage.getItem("CurrentUserId")
    }
    else{
      this.userId = sessionStorage.getItem("Id");
    }
    
    this.reloadCalendar();

  }

  public reloadCalendar(){

    if(sessionStorage.getItem("Profile") == ("manager")){
      this.userId = sessionStorage.getItem("CurrentUserId")
      
    }
    else{
      this.userId = sessionStorage.getItem("Id");
    }

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
      }

      this.calendarOptions.events = this.events;

    })
  }

  // ngOnDestroy() {
  //   this.eventsSubscription.unsubscribe();
  // }

}
