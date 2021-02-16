import { AttributeType } from "./attribute-type";
import { ProductForSale } from "./product-for-sale";

export class AttributeValue {
    id: number;
    value: number;
    attributeType: AttributeType;
    productForSale: ProductForSale;
}