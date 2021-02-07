import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  private REST_API_SERVER = "https://reqres.in/api/users/2";

  private LOGIN_REQ = "http://localhost:3000/connexion";  //(email, mdp)
  private REGISTER_REQ = "http://localhost:3000/createAccount"; //(email, mdp)

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendLoginRequest(email, mdp){
    const options = { Email: email, Password: mdp} ;
    return this.httpClient.post(this.LOGIN_REQ, options).pipe(catchError(this.handleError));
  }

  public sendRegisterRequest(email, mdp){
    const options = { Email: email, Password: mdp} ;
    return this.httpClient.get(this.REGISTER_REQ).pipe(catchError(this.handleError));
  }

}
