import { AttributeType } from "./attribute-type";
import { AttributeValue } from "./attribute-value";
import { ObjectType } from "./object-type";
import { User } from "./user";

export class ObjectForSale {
    id: number;
    price: number;
    user: User;
    objectType: ObjectType;
    attributeValues: AttributeValue[];
}