import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-add-projet-dialog',
  templateUrl: './add-projet-dialog.component.html',
  styleUrls: ['./add-projet-dialog.component.css']
})
export class AddProjetDialogComponent implements OnInit {

  constructor(private managerService: ManagerServiceService) { }

  ngOnInit(): void {

    // get tout les entreprises
    this.userService.sendGetUserProjectsRequest(this.userId).subscribe((data: any = [])=>{
      console.log(data);
      this.ProjectsList = data;
    })


  }

}
