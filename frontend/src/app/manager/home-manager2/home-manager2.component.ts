import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-home-manager2',
  templateUrl: './home-manager2.component.html',
  styleUrls: ['./home-manager2.component.css']
})
export class HomeManager2Component implements OnInit {

  constructor(private managerService: ManagerServiceService) { }

  userId = sessionStorage.getItem("Id");
  CurrentProject: any = []; 
  ProjectList: any = [];
  CurrentClientName: string; 



  ngOnInit(): void {
    this.chargerProjets();

    this.managerService.sendGetManagerAllProjectsRequest(this.userId).subscribe((data: any = [])=>{
      console.log(data);
      this.ProjectList = data;
    })
  }

  chargerProjets() {
    //throw new Error('Method not implemented.');
  }

  loadCurrentProject(projet){

    this.CurrentProject = projet;
    this.CurrentClientName = projet.client.name;

  }

  sauvegarder(){
    // let name = (<HTMLInputElement>document.getElementById("name")).value;
    // let workLoad = (<HTMLInputElement>document.getElementById("workLoad")).value;
    // this.projets.push({"name":name,"workLoad":workLoad});
  }

  supprimer(){

    this.managerService.sendDeleteProjectRequest(this.CurrentProject.id).subscribe((data: any = [])=>{
      console.log(data);
    })

  }

  ajouterNouveauProjet(){
    
  }
}
