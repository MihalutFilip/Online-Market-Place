import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from 'src/app/enums/role';
import { DeleteConfirmationModal } from 'src/app/modals/delete-confirmation/delete-confirmation';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';
import { User } from 'src/app/models/user';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public productTypes: ProductType[];
  public loggedUser: User;

  constructor(private productService: ProductService,
    private productTypeService: ProductTypeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private storageService: StorageService) {
    this.loggedUser = this.storageService.getLoggedInUser();
  }

  ngOnInit(): void {
    if (this.loggedUser.role == Role.Client) {
      this.productService.getProducts().subscribe(products => {
        this.products = products;

        if (this.products.length == 0)
          this.snackBar.open(`There are no products yet`, '', { duration: Constants.SECONDS_FOR_SNACKBAR });
      });
    }
    else {
      this.productService.getProductsByUserId(this.loggedUser.id).subscribe(products => {
        this.products = products;

        if (this.products.length == 0)
          this.snackBar.open(`There are no products yet`, '', { duration: Constants.SECONDS_FOR_SNACKBAR });
      });

      this.productTypeService.getProductTypes().subscribe(productsTypes => {
        this.productTypes = productsTypes;
      });
    }
  }

  addProduct(product: Product) {
    console.log(product);
    this.productService.saveProduct(product).subscribe(savedProduct => {
      console.log(savedProduct);
      this.products.push(savedProduct);
      this.snackBar.open(`The product was added`, '', { duration: Constants.SECONDS_FOR_SNACKBAR });
    });
  }

  deleteProduct(product: Product) {
    let dialogRef = this.dialog.open(DeleteConfirmationModal);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.removeProduct(product.id).subscribe(_ => {
          let indexOfProduct = this.products.indexOf(product);
          this.products.splice(indexOfProduct, 1);
          this.snackBar.open(`The product was removed`, '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        });
      }
    })

  }
}
