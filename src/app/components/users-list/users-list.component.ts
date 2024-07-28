import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input({required:true}) usersList: IUser[] = []
  displayedColumns: string[] = ['name','date','status']

  @Output('userSelected')userSelectedEmitt = new EventEmitter<IUser>();

  constructor(public dialog: MatDialog) {}

  onUserSelected(usuario:IUser){
    console.log(usuario)
    this.userSelectedEmitt.emit(usuario);
  }
  openDialog(usuario:IUser){
    this.dialog.open(UserDetailsComponent, {
      data: usuario,
      width:'500px'
    });
  }
}
