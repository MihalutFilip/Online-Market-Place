import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataType } from 'src/app/enums/data-type';
import { DeleteConfirmationModal } from 'src/app/modals/delete-confirmation/delete-confirmation';
import { ObjectTypeModal } from 'src/app/modals/object-type-modal/object-type-modal';
import { ObjectType } from 'src/app/models/object-type';
import { ObjectTypeService } from 'src/app/services/object-type.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-object-type',
  templateUrl: './object-type.component.html',
  styleUrls: ['./object-type.component.scss']
})
export class ObjectTypeComponent implements OnInit {
  public objectTypes: ObjectType[];
  public filteredObjectTypes: ObjectType[];
  public DataType = DataType;
  public filterSearch: string;

  constructor(private objectTypeService: ObjectTypeService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { 
    this.objectTypeService.getObjectTypes().subscribe(result => {
      console.log(result);
      this.objectTypes = result;
      this.filteredObjectTypes = result;
    });
  }

  ngOnInit(): void {
  }

  onFilterChanged() {
    this.filteredObjectTypes = this.objectTypes.filter(objectType => objectType.name.includes(this.filterSearch));
  }

  saveObjectType() {
    let dialogRef = this.dialog.open(ObjectTypeModal, {
      data: {
        objectType: new ObjectType()
      }
    });

    dialogRef.afterClosed().subscribe(objectType => {
      if (objectType) {
        this.objectTypeService.saveObjectType(objectType).subscribe(savedObjectType => {
      console.log(savedObjectType);

          this.objectTypes.push(savedObjectType);
          this.filteredObjectTypes = this.objectTypes;
          this.snackBar.open("The product type was saved", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        });
      }
    });
  }

  removeObjectType(objectType: ObjectType) {
    let dialogRef = this.dialog.open(DeleteConfirmationModal);
    
    dialogRef.afterClosed().subscribe(confirmationForDelete => {
      if (confirmationForDelete) {
        this.objectTypeService.removeObjectType(objectType.id).subscribe(_ => {
          let index = this.objectTypes.indexOf(objectType);
          this.objectTypes.slice(index);
          this.filteredObjectTypes = this.objectTypes;
          this.snackBar.open("The product type was deleted", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        });
      }
    });
  }
}
