import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataType } from 'src/app/enums/data-type';
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
  public product: Product;
  public DataType = DataType;
  url: string | ArrayBuffer;

  constructor(private localStorage: StorageService) {
  }

  ngOnInit(): void {
    this.productTypes.forEach(p => {
      p.attributeTypes.sort((a,b) => a.dataType - b.dataType);
    })
  }

  addNewProduct() {
    this.product = <Product> {
      userId: this.localStorage.getLoggedInUser().id
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
      attributeType: atrributeType,
      value: atrributeType.dataType == DataType.Boolean ? false : ''
    });

    this.product.productTypeId = this.product.productType.id;
  }

  saveProduct() {
    console.log(this.product);
    this.product.attributeValues.forEach(a => { a.value = a.value.toString(); })
    this.addProduct.emit(this.product);
    this.product = null;
  }

  cancel() {
    this.product = null;
  }
}
