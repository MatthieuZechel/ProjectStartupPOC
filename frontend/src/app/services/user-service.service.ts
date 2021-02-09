import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private GETTIMEUSER_REQ = "http://localhost:8080/getTimeUser";  //get (userId)
  private ADDWORKEDTIME_REQ = "http://localhost:8080/addWorkedTime"; // post (userId, projectId, startDate, duration)
  private GETWORKEDTIMESFORWEEK_REQ = "http://localhost:8080/getWorkedTimesForWeek";  //get (weekNumber, userId)
  private GENERATEREPORT_REQ = "http://localhost:8080/generateReport"; // get (userId,month)
  private UPDATEWORKEDTIME_REQ = "http://localhost:8080/updateWorkedTime";  //post (userId, timeWorkedId, startDate, duration)


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
    const options = {userId: userId} ;
    return this.httpClient.post(this.GETTIMEUSER_REQ, options).pipe(catchError(this.handleError));
  }

  public sendAddWorkedTimeRequest(userId, projectId, startDate, duration){
    const options = { userId: userId, projectId: projectId, startDate: startDate, duration: duration} ;
    return this.httpClient.post(this.ADDWORKEDTIME_REQ, options).pipe(catchError(this.handleError));
  }

  public sendGetWorkedTimeForWeekRequest(weekNumber, userId){
    const options = { weekNumber: weekNumber, Id: userId} ;
    return this.httpClient.post(this.GETWORKEDTIMESFORWEEK_REQ, options).pipe(catchError(this.handleError));
  }

  public sendGetReportRequest(userId,month){
    const options = { userId: userId, month: month} ;
    return this.httpClient.post(this.GENERATEREPORT_REQ, options).pipe(catchError(this.handleError));
  }

  public sendUpdateWorkedTimeRequest(userId, timeWorkedId, startDate, duration){
    const options = { userId: userId, timeWorkedId: timeWorkedId, startDate: startDate, duration: duration} ;
    return this.httpClient.post(this.UPDATEWORKEDTIME_REQ, options).pipe(catchError(this.handleError));
  }

}
