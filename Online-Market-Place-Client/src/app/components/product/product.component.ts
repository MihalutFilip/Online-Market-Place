import { Component, OnInit } from '@angular/core';
import { ProductForSale } from 'src/app/models/product-for-sale';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: ProductForSale[];

  constructor() { }

  ngOnInit(): void {
  }

}
