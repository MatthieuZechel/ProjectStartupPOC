import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Nom: string;
  Prenom: string;
  Profile: string;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    
    this.Nom = sessionStorage.getItem("Nom");
    this.Prenom = sessionStorage.getItem("Prenom");
    this.Profile = sessionStorage.getItem("Profile");
  }

  Deconnexion(){
    sessionStorage.clear();
  }

  Home(){

    if(this.Profile == "developer")
        this.router.navigate(['/user']);

    if(this.Profile == "manager")
      this.router.navigate(['/manager']);

    if(this.Profile == "admin")
      this.router.navigate(['/admin']);
  }

}
