// src/models/CropModel.ts

export interface Crop {
    cropCode: string;
    commonName: string;
    scientificName: string;
    category: string;
    season: string;
    status: 'AVAILABLE' | 'IN_USE';
    fieldId: string;
}

// export class CropClass implements Crop {
//     cropCode: string;
//     commonName: string;
//     scientificName: string;
//     category: string;
//     season: string;
//     status: 'AVAILABLE' | 'IN_USE';
//     fieldId: string;
//
//     constructor(
//         cropCode: string,
//         commonName: string,
//         scientificName: string,
//         category: string,
//         season: string,
//         status: 'AVAILABLE' | 'IN_USE',
//         fieldId: string
//     ) {
//         this.cropCode = cropCode;
//         this.commonName = commonName;
//         this.scientificName = scientificName;
//         this.category = category;
//         this.season = season;
//         this.status = status;
//         this.fieldId = fieldId;
//     }
// }