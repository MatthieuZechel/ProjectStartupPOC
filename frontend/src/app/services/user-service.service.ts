import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,  HttpErrorResponse} from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private GETTIMEUSER_REQ = "http://localhost:8080/getTimeUser";  //get (userId)
  private ADDWORKEDTIME_REQ = "http://localhost:8080/addWorkedTime"; // post (userId, startDate, duration, projectId, )
  private GETWORKEDTIMESFORWEEK_REQ = "http://localhost:8080/getWorkedTimesForWeek";  //get (weekNumber, userId)
  private GENERATEREPORT_REQ = "http://localhost:8080/generateReport"; // get (userId,month)
  private UPDATEWORKEDTIME_REQ = "http://localhost:8080/updateWorkedTime";  //post (userId, timeWorkedId, startDate, duration)
  private GETUSERPROJECTS_REQ = "http://localhost:8080/getUserProjects";  //post (userId, timeWorkedId, startDate, duration)


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

  public sendGetTimeUserRequest(userId){
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('userId', userId);
    return this.httpClient.get(this.GETTIMEUSER_REQ, { params: params });
  }

  public sendAddWorkedTimeRequest(userId, startDate, duration, projectId){
    const options = { userId: userId, startDate: startDate, duree: duration, projectId: projectId} ;
    return this.httpClient.post(this.ADDWORKEDTIME_REQ, options);
  }

  public sendGetWorkedTimeForWeekRequest(weekNumber, userId){
    const options = { weekNumber: weekNumber, Id: userId} ;
    return this.httpClient.post(this.GETWORKEDTIMESFORWEEK_REQ, options);
  }

  public sendGetReportRequest(userId,month){
    const options = { userId: userId, month: month} ;
    return this.httpClient.post(this.GENERATEREPORT_REQ, options);
  }

  public sendUpdateWorkedTimeRequest(IdTimeWorked, StartingDate, Duree, userId, ProjectId){
    const options = { workedTimeId: IdTimeWorked,startDate: StartingDate,duree: Duree, userId: userId, projectId: ProjectId} ;
    return this.httpClient.post(this.UPDATEWORKEDTIME_REQ, options);
  }

  public sendGetUserProjectsRequest(userId){
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('userId', userId);
    return this.httpClient.get(this.GETUSERPROJECTS_REQ, { params: params });
  }
  

}
