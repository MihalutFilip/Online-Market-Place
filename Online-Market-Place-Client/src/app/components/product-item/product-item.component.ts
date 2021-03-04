import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionType } from 'src/app/enums/action-type';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter<Product>();
  public actionType: ActionType;
  public ActionType = ActionType;

  constructor() {
  }

  ngOnInit(): void {
    this.actionType = !this.product.id ? ActionType.Add : ActionType.View;
  }

  deleteProductItem() {
    this.deleteProduct.emit(this.product);
  }
}
