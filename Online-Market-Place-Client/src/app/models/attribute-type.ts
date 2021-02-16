import { DataType } from "../enums/data-type";
import { AttributeValue } from "./attribute-value";
import { ProductType } from "./product-type";

export class AttributeType {
    id: number;
    name: string;
    dataType: DataType;
    productType: ProductType;
    attributeValues: AttributeValue[];
}