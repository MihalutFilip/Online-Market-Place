import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataType } from 'src/app/enums/data-type';
import { DeleteConfirmationModal } from 'src/app/modals/delete-confirmation/delete-confirmation';
import { ProductTypeModal } from 'src/app/modals/product-type-modal/product-type-modal';
import { ProductType } from 'src/app/models/product-type';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
  public productTypes: ProductType[];
  public filteredProductTypes: ProductType[];
  public DataType = DataType;
  public filterSearch: string;

  constructor(private productTypeService: ProductTypeService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { 
    this.productTypeService.getProductTypes().subscribe(result => {
      this.productTypes = result;
      this.filteredProductTypes = result;

      if(result.length == 0) {
        this.snackBar.open("No product type defined.", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
      }
    });
  }

  ngOnInit(): void {
  }

  onFilterChanged() {
    this.filteredProductTypes = this.productTypes.filter(productType => productType.name.includes(this.filterSearch));
  }

  saveProductType() {
    let dialogRef = this.dialog.open(ProductTypeModal, {
      data: {
        productType: new ProductType()
      }
    });

    dialogRef.afterClosed().subscribe(productType => {
      if (productType) {
        this.productTypeService.saveProductType(productType).subscribe(savedProductType => {
          this.productTypes.push(savedProductType);
          this.filteredProductTypes = this.productTypes;
          this.snackBar.open("The product type was saved", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        });
      }
    });
  }

  removeProductType(productType: ProductType) {
    let dialogRef = this.dialog.open(DeleteConfirmationModal);
    
    dialogRef.afterClosed().subscribe(confirmationForDelete => {
      if (confirmationForDelete) {
        this.productTypeService.removeProductType(productType.id).subscribe(_ => {
          let indexOfObject = this.productTypes.indexOf(productType);
          this.productTypes.splice(indexOfObject, 1);
          this.filteredProductTypes = this.productTypes;
          this.snackBar.open("The product type was deleted", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        });
      }
    });
  }
}
