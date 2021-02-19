import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/enums/role';
import { DeleteConfirmationModal } from 'src/app/modals/delete-confirmation/delete-confirmation';
import { UserModal } from 'src/app/modals/user-modal/user-modal';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Constants } from 'src/app/utils/constants';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public dataSource;
  public users: User[] = [];
  public filterSearch: string;
  public displayedColumns: string[] = ['username', 'email', 'role', 'edit'];
  public Role = Role;

  constructor(private usersService: UsersService, private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(departaments => {
      this.users = departaments;
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  onFilterChanged() {
    this.dataSource = new MatTableDataSource(this.users.filter(user => user.username.includes(this.filterSearch) ||
      user.email.includes(this.filterSearch) ||
      Role[user.role].includes(this.filterSearch)));
  }

  editUser(user: User) {
    let dialogRef = this.dialog.open(UserModal, {
      data: {
        user: { ...user }
      }
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user) {
        this.usersService.updateUser(user).subscribe(_ => {
          var indexOfUser = this.users.indexOf(this.users.find(d => d.id == user.id));
          this.users[indexOfUser] = user;
          this.dataSource = new MatTableDataSource(this.users);
          this.snackBar.open("The user was updated", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        });
      }
    });
  }

  saveUser() {

    let dialogRef = this.dialog.open(UserModal, {
      data: {
        user: <User>{}
      }
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user) {
        (<User> user).colorCode = Utils.getRandomColor();
        this.usersService.saveUser(user).subscribe(savedUser => {
          this.users.push(savedUser);
          this.dataSource = new MatTableDataSource(this.users);
          this.snackBar.open("The user was saved", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        });
      }
    }
    );
  }

}
