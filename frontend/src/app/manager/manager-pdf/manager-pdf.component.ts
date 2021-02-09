import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-manager-pdf',
  templateUrl: './manager-pdf.component.html',
  styleUrls: ['./manager-pdf.component.css']
})
export class ManagerPdfComponent implements OnInit {

  temps = [];
  tempssomme = [];
  projetnom = [];
  projetsid = [];
  projets: any = [];
  userId: string;
  user: any = [];
  isDataLoaded: boolean;
  displayedColumns: string[] = ["id","projet","duree"];


  constructor( private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("CurrentUserId");
    this.generertemps();
    console.log("temps user", this.user);
  }

  calculertemps() {
    this.temps.forEach(tempi => {
      if(this.projetsid.indexOf(tempi.project.id) < 0){
        this.projetsid.push(tempi.project.id);
        this.projetnom.push(tempi.project.name)
      }
    });
    this.projetsid = this.projetsid.filter((v, i, a) => a.indexOf(v) === i);
    console.log("projet id", this.projetsid);

    this.tempssomme = Array(this.projetsid.length).fill(0);
    this.temps.forEach(tempi => {
      let i = this.projetsid.indexOf(tempi.project.id);
      this.tempssomme[i] += tempi.duree;
    });
    console.log("temps somme", this.tempssomme);

    for(let i = 0; i < this.projetsid.length; i++){
      let cell = {"id": this.projetsid[i], "duree": this.tempssomme[i], "projet": this.projetnom[i]}
      this.projets.push(cell);
    }
    this.isDataLoaded = true;
    console.log("projets", this.projets);
  }

  pdf(){
    let data = document.getElementById("page");  
    html2canvas(data,{useCORS: false}).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 210, 297);  
      pdf.save('DocumentMensuel.pdf');   
    }); 
  }

  openPdf(){
    let doc = new jsPDF('p', 'mm', [297, 210]);
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    console.log(width);
    console.log(height);
    let contenu = document.getElementById("page");
    doc.html(contenu,{
      callback: function (doc) {
        doc.save();
      }
    });
  }

  generertemps(){

    this.userService.sendGetTimeUserRequest(this.userId).subscribe((data: any = [])=>{
      console.log("data" , data);
      this.user = data[0].user;
      this.temps = data;

      
    this.calculertemps();
    })
  }

}