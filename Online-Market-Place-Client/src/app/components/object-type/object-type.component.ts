import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataType } from 'src/app/enums/data-type';
import { ObjectTypeModal } from 'src/app/modals/object-type-modal/object-type-modal';
import { ObjectType } from 'src/app/models/object-type';
import { ObjectTypeService } from 'src/app/services/object-type.service';

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
    public dialog: MatDialog) { 
    this.objectTypeService.getObjectTypes().subscribe(result => {
      this.objectTypes = result;
      this.filteredObjectTypes = result;
      console.log(result);
    });
  }

  ngOnInit(): void {
    console.log(this.objectTypes);
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

    dialogRef.afterClosed().subscribe(user => {
      console.log(user);
      if (user) {
        // this.usersService.saveUser(user).subscribe(savedUser => {
        //   this.users.push(savedUser);
        //   this.dataSource = new MatTableDataSource(this.users);
        //   this.snackBar.open("The user was saved", '', { duration: Constants.SECONDS_FOR_SNACKBAR });
        // });
      }
    }
    );
  }
}
