import { AttributeType } from "./attribute-type";
import { ObjectForSale } from "./object-for-sale";

export class ObjectType {
    id: number;
    name: string;
    description: string;
    objectsForSale: ObjectForSale[];
    attributeTypes: AttributeType[] = [];
}