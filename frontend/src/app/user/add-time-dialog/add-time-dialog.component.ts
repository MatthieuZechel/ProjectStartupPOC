import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-time-dialog',
  templateUrl: './add-time-dialog.component.html',
  styleUrls: ['./add-time-dialog.component.css']
})
export class AddTimeDialogComponent implements OnInit {

  userId = sessionStorage.getItem("Id");
  Duree: string;
  StartingDate: string;
  ProjetId: string;
  res = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  sendTime(){
    this.userService.sendAddWorkedTimeRequest(this.userId, this.ProjetId, this.StartingDate, this.Duree).subscribe((data: any[])=>{
      console.log(data);
      this.res = data;
    }) 
  }

}
