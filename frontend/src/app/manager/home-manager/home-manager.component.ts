import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {

  constructor() { }

  CurrentUser: string;
  UserList: any = [];

  ngOnInit(): void {
  }


  AddTime(){

  }

  ListeUser(){

  }
 
}
