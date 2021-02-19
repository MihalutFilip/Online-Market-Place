import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/models/user';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  constructor(private usersService: UsersService,
    private router: Router) { 
    this.user = <User> {
      role: Role.Client
    }
  }

  ngOnInit(): void {
    
  }

  signUp() {
    this.usersService.registerUser(this.user).subscribe(_ => {
      this.router.navigate(['/login']);
    });
  }
}
