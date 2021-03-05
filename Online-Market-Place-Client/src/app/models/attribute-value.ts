import { AttributeType } from "./attribute-type";
import { Product } from "./product";

export class AttributeValue {
    id: number = null;
    value: string;
    attributeType: AttributeType;
    product: Product;
}