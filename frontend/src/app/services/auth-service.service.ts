import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  private REST_API_SERVER = "https://reqres.in/api/users/2";

  //post http://localhost:3000/connexion (email, mdp)
  //post http://localhost:3000/createAccount (email, mdp)

  //private LOGIN_REQ = "http://localhost:3000/connexion";  
  //private REGISTER_REQ = "http://localhost:3000/connexion";

  constructor(private httpClient: HttpClient) { }

  public sendLoginRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendRegisterRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
