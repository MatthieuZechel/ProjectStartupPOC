import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  private REST_API_SERVER = "https://reqres.in/api/users/2";

  private LOGIN_REQ = "http://localhost:8080/connexion";  //(email, mdp)
  private REGISTER_REQ = "http://localhost:8080/createAccount"; //(email, mdp)

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
    const options = { email: email, password: mdp};
    return this.httpClient.post(this.LOGIN_REQ, options);
  } 

  public sendRegisterRequest(email, mdp){
    const options = { Email: email, Password: mdp} ;
    return this.httpClient.post(this.REGISTER_REQ, options);
  }


  // test ping
  public sendPingRequest(){
    return this.httpClient.get("http://localhost:8080/ping");//.pipe(catchError(this.handleError));
  }


}
