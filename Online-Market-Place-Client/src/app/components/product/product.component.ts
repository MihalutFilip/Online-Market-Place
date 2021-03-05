import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductService } from 'src/app/services/product.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public productTypes: ProductType[];

  constructor(private productService: ProductService,
    private productTypeService: ProductTypeService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.productTypeService.getProductTypes().subscribe(productsTypes => {
      this.productTypes = productsTypes;
    });
  }

  addProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(savedProduct => {
      this.products.push(savedProduct);
      this.snackBar.open(`The product was added`, '', { duration: Constants.SECONDS_FOR_SNACKBAR });
    });
  }

  deleteProduct(product: Product) {
    this.productService.removeProduct(product.id).subscribe(_ => {
      let indexOfProduct = this.products.indexOf(product);
      console.log(indexOfProduct)
      this.products.splice(indexOfProduct, 1);
      this.snackBar.open(`The product was removed`, '', { duration: Constants.SECONDS_FOR_SNACKBAR });
    });
  }
}
