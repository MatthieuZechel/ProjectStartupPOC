import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AddTimeDialogComponent } from '../add-time-dialog/add-time-dialog.component';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})

export class HomeUserComponent implements OnInit {

  userId = sessionStorage.getItem("Id");
  res = [];

  constructor(private router: Router,public dialog: MatDialog, private userService: UserServiceService) {}

  ngOnInit(): void {
  }

  AddTime() {
    const dialogRef = this.dialog.open(AddTimeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  GeneratePDF(){
    this.router.navigate(['/pdf-page']);
  }
}
