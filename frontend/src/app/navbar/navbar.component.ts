import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Nom: string;
  Prenom: string;

  constructor() { }

  ngOnInit(): void {
    this.Nom = localStorage.getItem("nom");
    this.Prenom = localStorage.getItem("prenom");
  }

  Deconnexion(){
    sessionStorage.clear();
  }

}
