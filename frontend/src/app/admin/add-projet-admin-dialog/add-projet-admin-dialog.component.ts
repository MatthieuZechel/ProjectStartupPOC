import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-add-projet-admin-dialog',
  templateUrl: './add-projet-admin-dialog.component.html',
  styleUrls: ['./add-projet-admin-dialog.component.css']
})
export class AddProjetAdminDialogComponent implements OnInit {

  userId = sessionStorage.getItem("Id");
  CompanyList: any = [];
  nomProjet: string; 
  workLoad: string;
  idClient: string;
  ManagerList: any = [];
  idManager: string;

  constructor(private managerService: ManagerServiceService) { }

  ngOnInit(): void {

    this.managerService.sendGetAllCompaniesRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.CompanyList = data;
    })

    this.managerService.sendGetAllManagerRequest().subscribe((data: any = [])=>{
      console.log(data);
      this.ManagerList = data;
    })

  } 

  creerProjet(){
  
    this.managerService.sendGetCreateProjectRequest(this.nomProjet, this.workLoad, this.idClient, this.idManager).subscribe((data: any = [])=>{
      console.log(data);
      this.CompanyList = data;
    })

  }

}
