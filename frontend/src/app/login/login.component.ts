import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService) { }

  res = [];

  ngOnInit(): void {

  }

  login() {
    this.authService.sendLoginRequest().subscribe((data: any[])=>{
      console.log(data);
      this.res = data;
    }) 
  }

   

  createAccount() {
      this.router.navigate(['/register']);
  }
}
