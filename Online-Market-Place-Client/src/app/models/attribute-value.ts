import { AttributeType } from "./attribute-type";
import { ObjectForSale } from "./object-for-sale";

export interface AttributeValue {
    id: number;
    value: number;
    attributeType: AttributeType;
    objectForSale: ObjectForSale;
}