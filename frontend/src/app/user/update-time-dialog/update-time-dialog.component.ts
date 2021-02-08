import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-update-time-dialog',
  templateUrl: './update-time-dialog.component.html',
  styleUrls: ['./update-time-dialog.component.css']
})
export class UpdateTimeDialogComponent implements OnInit {

  userId = sessionStorage.getItem("Id");
  Duree: string;
  StartingDate: string;
  TimeWorked: string;
  res = [];

  constructor(private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public data: any) {
   }

  ngOnInit(): void {
    this.Duree = this.data // trouver le bon
    this.StartingDate = this.data // trouver le bon
    // initialise tout les champs dispo
  }

  UpdateTime(){
    this.userService.sendUpdateWorkedTimeRequest(this.userId, this.TimeWorked, this.StartingDate, this.Duree).subscribe((data: any[])=>{
      console.log(data);
      this.res = data;
    }) 
  }

}
