import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-update-time-dialog',
  templateUrl: './update-time-dialog.component.html',
  styleUrls: ['./update-time-dialog.component.css']
})
export class UpdateTimeDialogComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

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

  userId = sessionStorage.getItem("Id");
  Duree: string;
  StartingDate: string;
  IdTimeWorked: string;
  ProjectId: string;
  heure: string;
  minute: string;

  constructor(private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public data: any) {
   }

  ngOnInit(): void {
    console.log("Erwan" , this.data);

    var startDate = new Date( this.data.dataKey.event._instance.range.start);
    var endDate = new Date( this.data.dataKey.event._instance.range.end);
    this.Duree =  (endDate.getHours() - startDate.getHours()).toString();

    console.log(this.Duree);

    this.StartingDate = new Date(this.data.dataKey.event._instance.range.start).toJSON()
    this.IdTimeWorked = this.data.dataKey.event._def.publicId
    this.ProjectId = this.data.dataKey.event._def.title
    
    this.heure = new Date(this.data.dataKey.event._instance.range.start).toJSON().slice(11, 13);
    this.minute = new Date(this.data.dataKey.event._instance.range.start).toJSON().slice(14, 16);

    // initialise tout les champs dispo
  }

  UpdateTime(){

    var StartDate = this.StartingDate.slice(0, 11) + this.heure + ":" + this.minute + ":00";
    console.log(StartDate);
    // PROJECT ID a faire
    this.userService.sendUpdateWorkedTimeRequest(this.IdTimeWorked, StartDate,this.Duree, this.userId, 1).subscribe((data: any = [])=>{
      console.log(data);

    }) 
  } 


  SendReload(){
    this.messageEvent.emit("reload");
  }


}
