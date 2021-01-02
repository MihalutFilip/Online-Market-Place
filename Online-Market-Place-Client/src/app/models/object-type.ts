import { AttributeType } from "./attribute-type";
import { ObjectForSale } from "./object-for-sale";

export interface ObjectType {
    id: number;
    name: string;
    objectsForSale: ObjectForSale[];
    attributeTypes: AttributeType[];
}