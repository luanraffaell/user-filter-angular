import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  usersList: IUser[] = []
  usersListFiltered: IUser[] = []
  userSelected: IUser = {} as IUser;
  showUserDetails:boolean = false;

  ngOnInit(): void {
    setTimeout(() =>{
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    },1000)
  }
  onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOption: IFilterOption){
    console.log(filterOption)
    this.usersListFiltered = this.filterUserList(filterOption, this.usersList);
  }

  filterUserList(filterOption: IFilterOption, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];
    filteredList = this.filterUsersListByName(filterOption.name, usersList)
    filteredList = this.filterUsersListByStatus(filterOption.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOption.startDate, filterOption.endDate, filteredList);
    return filteredList;
  }
  
  
  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;
    if(NAME_NOT_TYPED){
      return usersList;
    }
    return usersList.filter(user => user.nome.toLowerCase().includes(name.toLocaleLowerCase()));
  }
  filterUsersListByStatus(status: boolean | undefined, filteredList: IUser[]): IUser[] {
    const INVALID_STATUS = status === undefined || status === null;
    if(INVALID_STATUS){
      return filteredList;
    }
    return filteredList.filter(user => user.ativo === status);
  }
  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || startDate === null || endDate === undefined || endDate === null;
    if(DATES_NOT_SELECTED){
      return usersList;
    }
    
    const listFiltered = usersList.filter(user => isWithinInterval(new Date(user.dataCadastro),{
      start: startDate,
      end: endDate
    }));
    return listFiltered;
  }
}
