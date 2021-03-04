import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AttributeValue } from 'src/app/models/attribute-value';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';

@Component({
  selector: 'app-add-product-item',
  templateUrl: './add-product-item.component.html',
  styleUrls: ['./add-product-item.component.scss']
})
export class AddProductItemComponent implements OnInit {
  @Input() productTypes: ProductType[];
  product: Product;
  url: string | ArrayBuffer;

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.product = new Product();
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

  resetAttributeValues() {
    this.product.attributeValues = this.product.productType.attributeTypes.map(atrributeType => <AttributeValue> {
      attributeType: atrributeType,
      product: this.product
    });
  }

  saveProduct() {
    console.log(this.product);
  }
}
