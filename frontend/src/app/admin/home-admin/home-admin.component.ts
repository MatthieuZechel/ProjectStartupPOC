import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjetDialogComponent } from 'src/app/manager/add-projet-dialog/add-projet-dialog.component';
import { ManagerServiceService } from 'src/app/services/manager-service.service';
import { AddProjetAdminDialogComponent } from '../add-projet-admin-dialog/add-projet-admin-dialog.component';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {


  constructor(private managerService: ManagerServiceService, public dialog: MatDialog) { }

  userId = sessionStorage.getItem("Id");
  CurrentProject: any = []; 
  ManagerList: any = [];
  ProjectList: any = [];
  CurrentClientName: string; 
  CurrentClientId: string; 
  name = "";
  workLoad = "";
  CompanyList: any = [];
  idClient: string;
  idManager: string;

  ngOnInit(): void {
    
    this.reloadProjects()

    this.managerService.sendGetAllCompaniesRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.CompanyList = data;
    })

    this.managerService.sendGetAllManagerRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.ManagerList = data;
    })
  }

  reloadProjects(){
    this.ProjectList = []
    this.managerService.sendGetAllProjectsRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.ProjectList = data;
    })
  }

  loadCurrentProject(projet){

    this.CurrentProject = projet;
    this.CurrentClientName = projet.client.name;
    this.CurrentClientId = projet.client.id;

    this.name = this.CurrentProject.name;
    this.workLoad = this.CurrentProject.workLoad;

    this.reloadProjects()
  }

  sauvegarder(){
    
    console.log("project id", this.CurrentProject.id)
    this.managerService.sendGetUpdateProjectRequest(this.CurrentProject.id, this.name, this.workLoad, this.CurrentClientId, this.idManager).subscribe((data: any = [])=>{
      console.log(data);
    })

    this.reloadProjects()
  }

  supprimer(){

    this.managerService.sendDeleteProjectRequest(this.CurrentProject.id).subscribe((data: any = [])=>{
      console.log(data);
    })
    
    this.reloadProjects()

  }

  ajouterNouveauProjet(){
    const dialogRef = this.dialog.open(AddProjetAdminDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this.reloadProjects()

  }
}
