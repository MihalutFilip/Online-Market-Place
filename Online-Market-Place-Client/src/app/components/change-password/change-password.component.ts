import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePassword } from 'src/app/models/requests/change-password';
import { StorageService } from 'src/app/services/storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public oldPassword: string;
  public newPassword: string;
  public confirmationPaswword: string;

  constructor(private usersService: UsersService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  changePassword() {
    var loggedUser = this.storageService.getLoggedInUser();

    var changePassword = <ChangePassword> {
      email: loggedUser.email,
      newPassword: this.newPassword,
      oldPassword: this.oldPassword
    }

    this.usersService.changePassword(changePassword).subscribe(x => {
      this.router.navigate(['/'], { relativeTo: this.route });
    })
  }
}
