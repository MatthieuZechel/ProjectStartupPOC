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

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {

  }

  login() {

    this.authService.sendLoginRequest(this.email, this.mdp).subscribe( (res: any = [] )  =>{
      console.log(res);

      //var res = JSON.parse(data);

      sessionStorage.setItem("Prenom", res.userName)
      sessionStorage.setItem("Nom", res.userLastName)
      sessionStorage.setItem("Profile", res.profile)
      sessionStorage.setItem("Id", res.id)


      if(res.profile == "developer")
        this.router.navigate(['/user']);

      if(res.profile == "manager")
        this.router.navigate(['/manager']);

      if(res.profile == "admin")
        this.router.navigate(['/admin']);

      
      // fonction du role rediriger sur la bonne page et l'écrire dans le session storage (avec nom et prenom)
    }) 


  }

  createAccount() {
      this.router.navigate(['/register']);
  }
}
