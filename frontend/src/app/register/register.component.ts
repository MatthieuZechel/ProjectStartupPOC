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
  res = [];

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  createAccount() {
    if (this.mdp1 == this.mdp2){
      this.authService.sendRegisterRequest(this.email, this.mdp1).subscribe((data: any = [])=>{
        console.log(data);
        this.res = data;
        alert("votre compte à été créé");
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
