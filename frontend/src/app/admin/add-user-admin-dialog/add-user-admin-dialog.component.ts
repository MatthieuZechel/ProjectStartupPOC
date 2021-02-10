import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-add-user-admin-dialog',
  templateUrl: './add-user-admin-dialog.component.html',
  styleUrls: ['./add-user-admin-dialog.component.css']
})
export class AddUserAdminDialogComponent implements OnInit {

  profileList: any = [
    { value: "developer"}, 
    { value: "manager"}, 
    { value: "admin"}
  ]

  userId = sessionStorage.getItem("Id");
  ManagerList: any = [];
  idManager: string;
  userlastname: string;
  username: string;
  userEmail: string;
  userPassword: string;
  profile: string;

  constructor(private managerService: ManagerServiceService) { }

  ngOnInit(): void {

    this.managerService.sendGetAllManagerRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.ManagerList = data;
    })

  } 

  creerUser(){
    
    this.managerService.sendGetCreateUserRequest(this.userlastname, this.username, this.userEmail, this.userPassword, this.profile, this.idManager).subscribe((data: any = [])=>{
      console.log(data);
    })

  }

}
