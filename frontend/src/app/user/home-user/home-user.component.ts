import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AddTimeDialogComponent } from '../add-time-dialog/add-time-dialog.component';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})

export class HomeUserComponent implements OnInit {

  userId: string; 
  res = [];

  constructor(public dialog: MatDialog, private userService: UserServiceService) {}

  ngOnInit(): void {
    
    this.userId = sessionStorage.getItem("Id");
    
    this.userService.sendGetTimeUserRequest(this.userId).subscribe((data: any[])=>{
      console.log(data);
      this.res = data;
    }) 

  }

  AddTime() {
    const dialogRef = this.dialog.open(AddTimeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  GeneratePDF(){
    // a voir comment on fait
  }
}
