import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input({required:true}) usersList: IUser[] = []
  displayedColumns: string[] = ['name','date','status']

  @Output('userSelected')userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(usuario:IUser){
    console.log(usuario)
    this.userSelectedEmitt.emit(usuario);
  }
}
