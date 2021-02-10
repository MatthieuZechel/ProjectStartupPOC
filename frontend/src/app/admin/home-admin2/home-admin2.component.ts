import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjetDialogComponent } from 'src/app/manager/add-projet-dialog/add-projet-dialog.component';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-home-admin2',
  templateUrl: './home-admin2.component.html',
  styleUrls: ['./home-admin2.component.css']
})

export class HomeAdmin2Component implements OnInit {

  constructor(private managerService: ManagerServiceService, public dialog: MatDialog) { }

  profileList: any = [
    { value: "developer"}, 
    { value: "manager"}, 
    { value: "admin"}
  ]


  userId = sessionStorage.getItem("Id");
  CurrentUser: any = []; 
  ManagerList: any = [];  
  UserList: any = [];
  userlastname: string;
  username: string;
  userEmail: string;
  userPassword: string;
  idManager: string;
  profile: string;

  ngOnInit(): void {


    this.managerService.sendGetAllManagerRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.ManagerList = data;
    })
    
    this.reloadUsers()
    
  }

  reloadUsers(){
    this.UserList = []
    this.managerService.sendGetAllUsersRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.UserList = data;
    })
  }

  loadCurrentUser(user){

    this.CurrentUser = user;

    this.reloadUsers()
  }

  sauvegarder(){
       
    this.managerService.sendGetUpdateUserRequest(this.CurrentUser.id, this.userlastname, this.username, this.userEmail, this.userPassword, this.profile, this.idManager).subscribe((data: any = [])=>{
      console.log(data);
    })

    this.reloadUsers()
  }

  supprimer(){

    this.managerService.sendDeleteUserRequest(this.CurrentUser.id).subscribe((data: any = [])=>{
      console.log(data);
    })
    
    this.reloadUsers()

  }

  ajouterNouveauProjet(){
    const dialogRef = this.dialog.open(AddProjetDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this.reloadUsers()

  }
}

