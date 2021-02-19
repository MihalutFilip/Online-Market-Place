import { AttributeType } from "./attribute-type";
import { Product } from "./product";

export class ProductType {
    id: number;
    name: string;
    description: string;
    product: Product[];
    attributeTypes: AttributeType[] = [];
}