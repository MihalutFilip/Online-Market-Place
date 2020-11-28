import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router, private storageService: StorageService) { }

    canActivate() {
        if (this.storageService.getLoggedInUser()) {
            this.router.navigate(['']);
            return false;
        }

        return true;
    }
}