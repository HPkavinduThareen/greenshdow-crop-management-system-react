import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Crop } from '../../models/CropModel.ts';

// Initial state
const initialState: Crop[] = [];

// Create slice
const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        addCrop: (state, action: PayloadAction<Crop>) => {
            state.push(action.payload); // Add a new crop to the state
        },
        updateCrop: (state, action: PayloadAction<Crop>) => {
            const index = state.findIndex(crop => crop.cropCode === action.payload.cropCode);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload }; // Update the existing crop
            }
        },
        deleteCrop: (state, action: PayloadAction<string>) => {
            return state.filter(crop => crop.cropCode !== action.payload); // Filter out the crop to be deleted
        }
    }
});

// Export actions
export const { addCrop, updateCrop, deleteCrop } = cropSlice.actions;

// Export reducer
export default cropSlice.reducer;