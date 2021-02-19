import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionType } from 'src/app/enums/action-type';
import { Product } from 'src/app/models/product';

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
  url: string | ArrayBuffer;

  constructor() { }

  ngOnInit(): void {
    this.actionType = !this.product.id ? ActionType.Add : ActionType.View;
  }

  deleteProductItem() {
    this.deleteProduct.emit(this.product);
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url);
      }
    }
}
}
