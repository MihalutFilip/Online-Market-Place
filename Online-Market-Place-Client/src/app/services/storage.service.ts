import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class StorageService {
    private getItem(key): string {
        return localStorage.getItem(key);
    }

    private removeItem(key: string){
        localStorage.removeItem(key);
    }

    private setItem(key, value){
        localStorage.setItem(key, value);
    }

    clear(){
        localStorage.clear();
    }

    setLoggedInUser(loggedInUser: User){
        this.setItem('loggedInUser', JSON.stringify(loggedInUser));
    }

    getLoggedInUser(){
        return <User> JSON.parse(this.getItem('loggedInUser'));
    }
}