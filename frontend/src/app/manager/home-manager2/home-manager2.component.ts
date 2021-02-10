import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagerServiceService } from 'src/app/services/manager-service.service';
import { AddProjetDialogComponent } from '../add-projet-dialog/add-projet-dialog.component';

@Component({
  selector: 'app-home-manager2',
  templateUrl: './home-manager2.component.html',
  styleUrls: ['./home-manager2.component.css']
})
export class HomeManager2Component implements OnInit {

  constructor(private managerService: ManagerServiceService, public dialog: MatDialog) { }

  userId = sessionStorage.getItem("Id");
  CurrentProject: any = []; 
  ProjectList: any = [];
  CurrentClientName: string; 
  CurrentClientId: string; 
  name = "";
  workLoad = "";

  ngOnInit(): void {
    
    this.reloadProjects()
    
  }

  reloadProjects(){
    this.ProjectList = []
    this.managerService.sendGetManagerAllProjectsRequest(this.userId).subscribe((data: any = [])=>{
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
       
    this.managerService.sendGetUpdateProjectRequest(this.CurrentProject.id, this.name, this.workLoad, this.CurrentClientId, this.userId).subscribe((data: any = [])=>{
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
    const dialogRef = this.dialog.open(AddProjetDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this.reloadProjects()

  }
}
