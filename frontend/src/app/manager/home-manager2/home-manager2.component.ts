import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-manager2',
  templateUrl: './home-manager2.component.html',
  styleUrls: ['./home-manager2.component.css']
})
export class HomeManager2Component implements OnInit {

  constructor() { }

  projets: any[] = [{"id":1,"name":"Projet1","workLoad":5},
  {"id":2,"name":"Projet2","workLoad":8}];

  ngOnInit(): void {
    this.chargerProjets();
  }

  chargerProjets() {
    //throw new Error('Method not implemented.');
  }


  sauvegarder(){
    // let name = (<HTMLInputElement>document.getElementById("name")).value;
    // let workLoad = (<HTMLInputElement>document.getElementById("workLoad")).value;
    // this.projets.push({"name":name,"workLoad":workLoad});
  }

  supprimer(){

  }

  ajouterNouveauProjet(){
    
  }
}
