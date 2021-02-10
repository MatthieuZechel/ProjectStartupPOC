import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-add-projet-dialog',
  templateUrl: './add-projet-dialog.component.html',
  styleUrls: ['./add-projet-dialog.component.css']
})
export class AddProjetDialogComponent implements OnInit {


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

  } 

  creerProjet(){
  
    this.managerService.sendGetCreateProjectRequest(this.nomProjet, this.workLoad, this.idClient, this.userId).subscribe((data: any = [])=>{
      console.log(data);
      this.CompanyList = data;
    })

  }

}
