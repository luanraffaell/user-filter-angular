import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  usersList: IUser[] = []
  userSelected: IUser = {} as IUser;
  showUserDetails:boolean = false;

  ngOnInit(): void {
    setTimeout(() =>{
      this.usersList = UsersList
    },2000)
  }
  onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }
  onFilter(filterOption: IFilterOption){
    console.log(filterOption)
  }
}
