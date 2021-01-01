import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/models/user';

@Component({
    styleUrls: ['./user-modal.scss'],
    templateUrl: './user-modal.html'
})

export class UserModal implements OnInit {
    public user: User;
    public rolesKeys = [];
    public roles = Role;

    constructor(public dialogRef: MatDialogRef<UserModal>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }


    ngOnInit() {
        this.user = this.data.user;
        this.rolesKeys = Object.keys(Role).slice(3);
    }
}