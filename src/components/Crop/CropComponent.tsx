import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import {addCrop, deleteCrop, updateCrop} from "../../store/slice/CropSlices.ts";


const CropComponent: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const crops = useSelector((state: RootState) => state.crops);

    const handleAddCrop = () => {
        dispatch(addCrop({ cropCode: 'C001', naxme: 'Wheat', type: 'Grain' }));
    };

    const handleUpdateCrop = () => {
        dispatch(updateCrop({ cropCode: 'C001', name: 'Wheat', type: 'Cereal' }));
    };

    const handleDeleteCrop = () => {
        dispatch(deleteCrop('C001'));
    };

    return (
        <div>
            <button onClick={handleAddCrop}>Add Crop</button>
            <button onClick={handleUpdateCrop}>Update Crop</button>
            <button onClick={handleDeleteCrop}>Delete Crop</button>
            <ul>
                {crops.map(crop => (
                    <li key={crop.cropCode}>{crop.name} - {crop.type}</li>
                ))}
            </ul>
        </div>
    );
};

export default CropComponent;