import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataType } from 'src/app/enums/data-type';
import { AttributeValue } from 'src/app/models/attribute-value';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';
import { Constants } from 'src/app/utils/constants';

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

  constructor(private localStorage: StorageService,
    private snackBar: MatSnackBar) {
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

  onSelectFile(event) { 
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

      reader.onload = (event) => { 
        this.snackBar.open(`Image added`, '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        this.product.imageBase64 = event.target.result;
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
    if(this.product.imageBase64)
      this.product.imageBase64 = (<any>this.product.imageBase64).replace('data:image/png;base64,', '');
      
    this.product.attributeValues.forEach(a => { a.value = a.value.toString(); })
    this.addProduct.emit(this.product);
    this.product = null;
  }

  cancel() {
    this.product = null;
  }
}
