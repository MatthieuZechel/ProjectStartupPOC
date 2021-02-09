import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,  HttpErrorResponse} from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {


  private GETUSERPROJECTS_REQ = "http://localhost:8080/getUserProjects";  //get (userId)
  private GETMANAGERALLUSER_REQ = "http://localhost:8080/getManagerAllUsers";  //get (managerId (userId))
  

  constructor(private httpClient: HttpClient) { }

  public sendGetUserProjectsRequest(userId){
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('userId', userId);
    return this.httpClient.get(this.GETUSERPROJECTS_REQ, { params: params });
  }

  public sendGetManagerAllUsersRequest(userId){
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('managerId', userId);
    console.log("manager ID", userId)
    return this.httpClient.get(this.GETMANAGERALLUSER_REQ, { params: params });
  }

  // public sendAddWorkedTimeRequest(userId, startDate, duration, projectId){
  //   const options = { userId: userId, startDate: startDate, duree: duration, projectId: projectId} ;
  //   return this.httpClient.post(this.ADDWORKEDTIME_REQ, options);
  // }



}
