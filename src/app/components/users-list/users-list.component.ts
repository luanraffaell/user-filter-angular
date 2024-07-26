import { Component } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  usersList: IUser[] = UsersList
  displayedColumns: string[] = ['name','date','status']

  onUserSelected(usuario:IUser){
    console.log(usuario)
  }
}
