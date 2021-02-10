import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  mdp1: string;
  mdp2: string;
  nom: string;
  prenom: string;

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  createAccount() {
    if (this.mdp1 == this.mdp2 ) { //&& this.mdp2.length > 0){
      this.authService.sendRegisterRequest( this.prenom, this.nom, this.email, this.mdp1).subscribe((data: any = [])=>{
        console.log(data);
        alert("votre compte à été créé");
        this.router.navigate(['/login']);
      }) 
    }
    else{
      alert("les deux mots de passe ne sont pas identiques");
    }
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
