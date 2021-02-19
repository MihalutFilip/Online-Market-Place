import { Pipe, PipeTransform } from '@angular/core';
import { DataType } from '../enums/data-type';
import { AttributeType } from '../models/attribute-type';

@Pipe({
  name: 'dataTypePipe'
})
export class DataTypePipe implements PipeTransform {

  transform(attributeTypes, dataType): AttributeType[] {
    if(!attributeTypes || !dataType)
      return attributeTypes;

    return attributeTypes.filter(attributeType => attributeType.dataType == DataType[dataType]);
  }

}
