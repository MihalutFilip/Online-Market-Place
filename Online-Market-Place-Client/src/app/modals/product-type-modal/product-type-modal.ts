import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataType } from 'src/app/enums/data-type';
import { Role } from 'src/app/enums/role';
import { AttributeType } from 'src/app/models/attribute-type';
import { ProductType } from 'src/app/models/product-type';
import { User } from 'src/app/models/user'


@Component({
    styleUrls: ['./product-type-modal.scss'],
    templateUrl: './product-type-modal.html'
})

export class ProductTypeModal implements OnInit {
    public productType: ProductType;
    public attributeTypes = [];
    public DataType = DataType;
    public dataTypeKeys;
    public stringType;

    constructor(public dialogRef: MatDialogRef<ProductTypeModal>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }


    ngOnInit() {
        this.productType = this.data.productType;
        this.productType.attributeTypes = [];
        this.dataTypeKeys = Object.keys(DataType).slice(4);
        this.initializeAttributeType();
    }

    initializeAttributeType() {
        this.dataTypeKeys.forEach(x => this.attributeTypes.push(this.productType.attributeTypes.filter(a => DataType[a.dataType] == x)));
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
            this.productType.attributeTypes.push(attributeType);
            this.attributeTypes[dataType].push(attributeType);
        }

        if (input) 
            input.value = '';
    }

    remove(attributeTypes: AttributeType, dataType: number): void {
        var index = this.productType.attributeTypes.indexOf(attributeTypes);

        if (index >= 0) {
            this.productType.attributeTypes.splice(index, 1);
        }

        index = this.attributeTypes[dataType].indexOf(attributeTypes);

        if (index >= 0) {
            this.attributeTypes[dataType].splice(index, 1);
        }
    }
}