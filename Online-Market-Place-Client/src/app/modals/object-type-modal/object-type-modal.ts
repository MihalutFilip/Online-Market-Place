import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataType } from 'src/app/enums/data-type';
import { Role } from 'src/app/enums/role';
import { AttributeType } from 'src/app/models/attribute-type';
import { ObjectType } from 'src/app/models/object-type';
import { User } from 'src/app/models/user'


@Component({
    styleUrls: ['./object-type-modal.scss'],
    templateUrl: './object-type-modal.html'
})

export class ObjectTypeModal implements OnInit {
    public objectType: ObjectType;
    public attributeTypes = [];
    public DataType = DataType;
    public dataTypeKeys;
    public stringType;

    constructor(public dialogRef: MatDialogRef<ObjectTypeModal>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }


    ngOnInit() {
        this.objectType = this.data.objectType;
        this.objectType.attributeTypes = [
            <AttributeType>{
                name: 'Aaa',
                dataType: DataType.String
            }
        ]
        this.dataTypeKeys = Object.keys(DataType).slice(4);
        this.initializeAttributeType();
        console.log(this.DataType);
    }

    initializeAttributeType() {
        this.dataTypeKeys.forEach(x => this.attributeTypes.push(this.objectType.attributeTypes.filter(a => DataType[a.dataType] == x)));
        console.log(this.attributeTypes);
    }

    add(event: MatChipInputEvent, dataType: number): void {
        var input = event.input;
        var value = event.value;

        if ((value || '').trim()) {
            var attributeType = <AttributeType>
                {
                    name: value.trim(),
                    dataType: dataType
                }
            this.objectType.attributeTypes.push(attributeType);
            this.attributeTypes[dataType].push(attributeType);
        }

        if (input) 
            input.value = '';
    }

    remove(attributeTypes: AttributeType, dataType: number): void {
        var index = this.objectType.attributeTypes.indexOf(attributeTypes);

        if (index >= 0) {
            this.objectType.attributeTypes.splice(index, 1);
        }

        index = this.attributeTypes[dataType].indexOf(attributeTypes);

        if (index >= 0) {
            this.attributeTypes[dataType].splice(index, 1);
        }
    }
}