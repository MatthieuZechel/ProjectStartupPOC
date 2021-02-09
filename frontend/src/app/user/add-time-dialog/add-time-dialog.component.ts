import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'src/app/calendar/calendar.component';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-time-dialog',
  templateUrl: './add-time-dialog.component.html',
  styleUrls: ['./add-time-dialog.component.css']
})
export class AddTimeDialogComponent implements OnInit {

  userId = sessionStorage.getItem("Id");
  Duree: string;
  StartingDate: Date;
  ProjetId: string;
  heure: string;
  minute: string;
  ProjectsList: any [];

  Heure: any [] = [
    {value: '08'},
    {value: '09'},
    {value: '10'},
    {value: '11'},
    {value: '12'},
    {value: '13'},
    {value: '14'},
    {value: '15'},
    {value: '16'},
    {value: '17'},
    {value: '18'},
    {value: '19'}
  ];

  Minute: any [] = [
    {value: '00'},
    {value: '15'},
    {value: '30'},
    {value: '45'}
  ];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

    this.userService.sendGetAllProjectsRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.ProjectsList = data;
    })


  }

  sendTime(){

    var StartDate = this.StartingDate.toJSON().slice(0, 11) + this.heure + ":" + this.minute + ":00";
    console.log(StartDate);

    this.userService.sendAddWorkedTimeRequest(this.userId, StartDate, this.Duree, this.ProjetId).subscribe((data: any = [])=>{
      console.log(data);
    }) 

    // reload calendar
  }

}
