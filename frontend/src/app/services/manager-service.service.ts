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
  private GETMANAGERALLPROJECTS_REQ = "http://localhost:8080/getManagerAllProjects";  //get (managerId)
  private DELETEPROJECT_REQ = "http://localhost:8080/project"; // delete
  private GETALLCOMPANIES_REQ = "http://localhost:8080/getAllCompanies"; // get
  private GETADDPROJECT_REQ = "http://localhost:8080/addProject"; // get



  

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
    return this.httpClient.get(this.GETMANAGERALLUSER_REQ, { params: params });
  }

  // public sendAddWorkedTimeRequest(userId, startDate, duration, projectId){
  //   const options = { userId: userId, startDate: startDate, duree: duration, projectId: projectId} ;
  //   return this.httpClient.post(this.ADDWORKEDTIME_REQ, options);
  // }

  public sendGetManagerAllProjectsRequest(userId){
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('managerId', userId);
    return this.httpClient.get(this.GETMANAGERALLPROJECTS_REQ, { params: params });
  }

  public sendDeleteProjectRequest(projectId){
    // Initialize Params Object
    let params = new HttpParams();

    params = params.append('projectId', projectId);
    console.log("projectId", projectId)
    return this.httpClient.delete(this.DELETEPROJECT_REQ, { params: params });
  }

  public sendGetAllCompaniesRequest(){
    return this.httpClient.get(this.GETALLCOMPANIES_REQ);
  }

  public sendGetCreateProjectRequest(nomProjet, workload, idClient, idManager){
    const options = { name: nomProjet, workload: workload, clientId: idClient, projectManagerId: idManager} ;
    return this.httpClient.post(this.GETADDPROJECT_REQ, options);
  }


}
