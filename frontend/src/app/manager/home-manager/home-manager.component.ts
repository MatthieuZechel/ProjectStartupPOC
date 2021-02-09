import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {

  constructor(private router: Router, private managerService: ManagerServiceService) { }

  //CurrentUser = sessionStorage.getItem("CurrentUser");
  CurrentUser: any = [];
  UserList: any = [];
  userId = sessionStorage.getItem("Id");

  ngOnInit(): void {

    this.managerService.sendGetManagerAllUsersRequest(this.userId).subscribe((data: any = [])=>{
      console.log(data);
      this.UserList = data;
    })

  }

  onClickUser(){
    this.setCurrentUser();
    // this.emitEventToChild();
  }

  setCurrentUser(){
      sessionStorage.setItem("CurrentUser", this.CurrentUser.userName)
      sessionStorage.setItem("CurrentUserId", this.CurrentUser.id)
  }

  ListeUser(){

  }

  // eventsSubject: Subject<void> = new Subject<void>();

  // emitEventToChild() {
  //   this.eventsSubject.next();
  // }
 
}
