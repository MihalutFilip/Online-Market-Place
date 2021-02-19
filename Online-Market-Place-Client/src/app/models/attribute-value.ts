import { AttributeType } from "./attribute-type";
import { Product } from "./product";

export class AttributeValue {
    id: number;
    value: number;
    attributeType: AttributeType;
    product: Product;
}