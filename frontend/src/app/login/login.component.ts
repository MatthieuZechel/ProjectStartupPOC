import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  mdp: string;
  res = [];

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {

  }

  login() {

    // this.authService.sendPingRequest().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.res = data;
    //   // fonction du role rediriger sur la bonne page et l'écrire dans le session storage (avec nom et prenom)
    // })


    this.authService.sendLoginRequest(this.email, this.mdp).subscribe((data: any[])=>{
      console.log(data);
      this.res = data;
      // fonction du role rediriger sur la bonne page et l'écrire dans le session storage (avec nom et prenom)
    }) 

    
  }

  createAccount() {
      this.router.navigate(['/register']);
  }
}
