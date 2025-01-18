// src/models/FieldModel.ts

export interface Field {
    fieldId: string;
    fieldName: string;
    fieldLocation: string;
    fieldSize: number;
    staffMember: string;
    fieldImage1: File | null;
    fieldImage2: File | null;
}

export class FieldClass implements Field {
    fieldId: string;
    fieldName: string;
    fieldLocation: string;
    fieldSize: number;
    staffMember: string;
    fieldImage1: File | null;
    fieldImage2: File | null;

    constructor(
        fieldId: string,
        fieldName: string,
        fieldLocation: string,
        fieldSize: number,
        staffMember: string,
        fieldImage1: File | null,
        fieldImage2: File | null
    ) {
        this.fieldId = fieldId;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fieldSize = fieldSize;
        this.staffMember = staffMember;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
    }
}