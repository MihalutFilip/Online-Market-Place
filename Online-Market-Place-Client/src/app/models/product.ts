import { AttributeType } from "./attribute-type";
import { AttributeValue } from "./attribute-value";
import { ProductType } from "./product-type";
import { User } from "./user";

export class Product {
    id: number;
    price: number;
    user: User;
    userId: number;
    productType: ProductType;
    productTypeId: number;
    attributeValues: AttributeValue[];
}