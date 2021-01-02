import { DataType } from "../enums/data-type";
import { AttributeValue } from "./attribute-value";
import { ObjectType } from "./object-type";

export interface AttributeType {
    id: number;
    name: string;
    dataType: DataType;
    objectType: ObjectType;
    attributeValues: AttributeValue[];
}