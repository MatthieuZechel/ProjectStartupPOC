import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-page',
  templateUrl: './pdf-page.component.html',
  styleUrls: ['./pdf-page.component.css']
})
export class PdfPageComponent implements OnInit {

  temps = [];
  tempssomme = [];
  projetnom = [];
  projetsid = [];
  projets = [];
  user = [];
  displayedColumns: string[] = ["id","projet","duree"];
  constructor() { }

  
  ngOnInit(): void {
    this.generertemps()
    this.calculertemps();
    this.user = this.temps[0].user;
    console.log(this.user);
  }

  calculertemps() {
    this.temps.forEach(tempi => {
      if(this.projetsid.indexOf(tempi.project.id) < 0){
        this.projetsid.push(tempi.project.id);
        this.projetnom.push(tempi.project.name)
      }
    });
    this.projetsid = this.projetsid.filter((v, i, a) => a.indexOf(v) === i);
    console.log(this.projetsid);

    this.tempssomme = Array(this.projetsid.length).fill(0);
    this.temps.forEach(tempi => {
      let i = this.projetsid.indexOf(tempi.project.id);
      this.tempssomme[i] += tempi.duree;
    });
    console.log(this.tempssomme);

    for(let i = 0; i < this.projetsid.length; i++){
      let cell = {"id": this.projetsid[i], "duree": this.tempssomme[i], "projet": this.projetnom[i]}
      this.projets.push(cell);
    }
  }

  pdf(){
    let data = document.getElementById("page");  
    html2canvas(data,{useCORS: false}).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 210, 297);  
      pdf.save('Filename.pdf');   
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
    this.temps = [
      {
          "id": 1,
          "startDate": "2021-02-09T10:33:26",
          "duree": 3,
          "weekNumber": 6,
          "user": {
              "id": 4,
              "userLastName": "TESTING",
              "userName": "Test",
              "email": "test.test@gmail.com",
              "password": "test",
              "profile": "developer",
              "manager": null,
              "projects": [],
              "workedTimes": [],
              "projectsManaged": []
          },
          "project": {
              "id": 1,
              "name": "TestProject1",
              "workLoad": 350,
              "client": {
                  "id": 1,
                  "projects": [],
                  "name": "TestCompany1"
              },
              "workers": [],
              "projectManager": {
                  "id": 1,
                  "userLastName": "ZECHEL",
                  "userName": "Matthieu",
                  "email": "matthieu.zechel@gmail.com",
                  "password": "1234",
                  "profile": "admin",
                  "manager": null,
                  "projects": [],
                  "workedTimes": [],
                  "projectsManaged": []
              },
              "workedTimes": []
          },
          "weekNumberFromStartDate": 6
      },
      {
        "id": 2,
        "startDate": "2021-02-09T10:33:26",
        "duree": 1,
        "weekNumber": 6,
        "user": {
            "id": 4,
            "userLastName": "TESTING",
            "userName": "Test",
            "email": "test.test@gmail.com",
            "password": "test",
            "profile": "developer",
            "manager": null,
            "projects": [],
            "workedTimes": [],
            "projectsManaged": []
        },
        "project": {
            "id": 2,
            "name": "TestProject2",
            "workLoad": 350,
            "client": {
                "id": 2,
                "projects": [],
                "name": "TestCompany2"
            },
            "workers": [],
            "projectManager": {
                "id": 1,
                "userLastName": "ZECHEL",
                "userName": "Matthieu",
                "email": "matthieu.zechel@gmail.com",
                "password": "1234",
                "profile": "admin",
                "manager": null,
                "projects": [],
                "workedTimes": [],
                "projectsManaged": []
            },
            "workedTimes": []
        },
        "weekNumberFromStartDate": 6
    },
    {
      "id": 3,
      "startDate": "2021-02-09T10:33:26",
      "duree": 2,
      "weekNumber": 6,
      "user": {
          "id": 4,
          "userLastName": "TESTING",
          "userName": "Test",
          "email": "test.test@gmail.com",
          "password": "test",
          "profile": "developer",
          "manager": null,
          "projects": [],
          "workedTimes": [],
          "projectsManaged": []
      },
      "project": {
          "id": 1,
          "name": "TestProject1",
          "workLoad": 350,
          "client": {
              "id": 1,
              "projects": [],
              "name": "TestCompany1"
          },
          "workers": [],
          "projectManager": {
              "id": 1,
              "userLastName": "ZECHEL",
              "userName": "Matthieu",
              "email": "matthieu.zechel@gmail.com",
              "password": "1234",
              "profile": "admin",
              "manager": null,
              "projects": [],
              "workedTimes": [],
              "projectsManaged": []
          },
          "workedTimes": []
      },
      "weekNumberFromStartDate": 6
  }
    ];
  }
}
