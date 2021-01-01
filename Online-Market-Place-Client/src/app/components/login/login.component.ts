import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { LoginCommunicationService } from 'src/app/services/communcation-services/login-communication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(private authenticateService: AuthorizeService,
    private storageService: StorageService,
    private router: Router,
    private loginCommunicationService: LoginCommunicationService) { }

  ngOnInit(): void {
  }

  signIn() {
    var user = {
      email: this.email,
      password: this.password
    };

    this.authenticateService.authorizeUser(user).subscribe(response => {
      this.storageService.setLoggedInUser(response);
      this.loginCommunicationService.userLoggedIn();
      this.router.navigate(['']);
    });
  }
}
