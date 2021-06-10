import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/models/user';
import { LoginCommunicationService } from 'src/app/services/communcation-services/login-communication.service';
import { MessageCommunicationService } from 'src/app/services/communcation-services/messages-communication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedUser: User;
  public Role = Role;

  constructor(public storageService: StorageService,
    private loginCommunicationService: LoginCommunicationService,
    private messageCommunicationService: MessageCommunicationService,
    private router: Router,
    private route: ActivatedRoute) {
    this.loggedUser = this.storageService.getLoggedInUser();
    this.loginCommunicationService.loginObservable$.subscribe(_ => {
      this.loggedUser = this.storageService.getLoggedInUser();
    });
  }

  ngOnInit(): void {
  }

  goToUserPage(): void {
    this.router.navigate(['/users'], { relativeTo: this.route });
  }

  logOut(): void {
    this.loggedUser = null;
    this.storageService.clear();
    this.loginCommunicationService.userLoggedOut();
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

  goToProductTypePage() {
    this.router.navigate(['/product-type'], { relativeTo: this.route });
  }

  goToObjectsPage() {
    this.router.navigate(['/products'], { relativeTo: this.route });
  }

  goToChangePasswordPage() {
    this.router.navigate(['/change-password'], { relativeTo: this.route });
  }

  openChat() {
    this.messageCommunicationService.openChat();
  }
}
