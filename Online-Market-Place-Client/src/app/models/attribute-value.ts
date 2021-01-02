import { AttributeType } from "./attribute-type";
import { ObjectForSale } from "./object-for-sale";

export class AttributeValue {
    id: number;
    value: number;
    attributeType: AttributeType;
    objectForSale: ObjectForSale;
}