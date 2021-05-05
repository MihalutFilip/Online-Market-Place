import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Role } from '../enums/role';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HomeGuard implements CanActivate {

    constructor(private router: Router, private storageService: StorageService) { }

    canActivate() {
        var user = this.storageService.getLoggedInUser();
        var url = !user ? '/login' : (user.role == Role.Admin ? '/users' : '/products');
        this.router.navigate([url]);
        
        return false;
    }
}