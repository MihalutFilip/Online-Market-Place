import { AttributeType } from "./attribute-type";
import { ProductForSale } from "./product-for-sale";

export class ProductType {
    id: number;
    name: string;
    description: string;
    productForSale: ProductForSale[];
    attributeTypes: AttributeType[] = [];
}