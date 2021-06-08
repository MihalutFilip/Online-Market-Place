import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionType } from 'src/app/enums/action-type';
import { Role } from 'src/app/enums/role';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';
import { User } from 'src/app/models/user';
import { MessageCommunicationService } from 'src/app/services/communcation-services/messages-communication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter<Product>();
  public Role = Role;
  public loggedInUser: User;

  constructor(private storageService: StorageService,
    private messageCommunicationService: MessageCommunicationService) {
  }

  ngOnInit(): void {
    this.loggedInUser = this.storageService.getLoggedInUser();

    if(this.product.imageBase64 && !(<string>this.product.imageBase64).includes('data:image/png;base64,'))
      this.product.imageBase64 = `data:image/png;base64,${this.product.imageBase64}`;
  }

  deleteProductItem() {
    this.deleteProduct.emit(this.product);
  }

  sendMessage() {
    this.messageCommunicationService.openChat(this.product.user);
  }
}
