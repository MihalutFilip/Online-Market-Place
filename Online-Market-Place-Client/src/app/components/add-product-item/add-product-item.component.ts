import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AttributeValue } from 'src/app/models/attribute-value';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-product-item',
  templateUrl: './add-product-item.component.html',
  styleUrls: ['./add-product-item.component.scss']
})
export class AddProductItemComponent implements OnInit {
  @Input() productTypes: ProductType[];
  @Output() addProduct = new EventEmitter<Product>();
  product: Product;
  url: string | ArrayBuffer;

  constructor(private localStorage: StorageService) {
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.product = <Product> {
      id: null,
      user: this.localStorage.getLoggedInUser()
    };
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
      id: null,
      attributeType: atrributeType,
    });

    this.product.productTypeId = this.product.productType.id;
  }

  saveProduct() {
    console.log(this.product);
    this.addProduct.emit(this.product);
    this.product = null;
  }
}
