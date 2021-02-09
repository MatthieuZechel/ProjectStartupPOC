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
  StartingDate: Date;
  ProjetId: string;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  sendTime(){

    var StartDate = this.StartingDate.toJSON();
    console.log(StartDate);
    this.userService.sendAddWorkedTimeRequest(this.userId, StartDate, this.Duree, this.ProjetId).subscribe((data: any = [])=>{
      console.log(data);

    }) 
  }

}
