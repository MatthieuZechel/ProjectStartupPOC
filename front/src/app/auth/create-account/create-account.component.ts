import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EMPTY, of } from 'rxjs';
import 'rxjs/add/operator/delay';

import { AuthenticationService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;

  constructor(private router: Router,
    private titleService: Title,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService) {
}

  ngOnInit() {
      this.titleService.setTitle('angular-material-template - Login');
      this.authenticationService.logout();
      this.createForm();
  }

  private createForm() {
    const savedUserEmail = localStorage.getItem('savedUserEmail');

    this.loginForm = new FormGroup({
        email: new FormControl(savedUserEmail, [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        rememberMe: new FormControl(savedUserEmail !== null)
    });
}

  createAccount() {
    this.router.navigate(['/auth/login']);
  }
}
