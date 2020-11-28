import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/services/authorize.service';
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
    private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.email, this.password)
    this.authenticateService.authorizeUser({
      email: this.email,
      password: this.password
    }).subscribe(response => {
      this.storageService.setLoggedInUser(response);
      this.router.navigate(['']);
    });
  }
}
