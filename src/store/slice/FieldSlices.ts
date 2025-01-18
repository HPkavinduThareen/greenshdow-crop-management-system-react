import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Field} from "../../models/FieldModel.ts";
;

// Define the initial state as an empty array of fields
const initialState: Field[] = [];

// Create the slice with actions and reducers
const fieldSlice = createSlice({
    name: 'fields', // Name of the slice
    initialState,
    reducers: {
        // Action to add a new field
        addField: (state, action: PayloadAction<Field>) => {
            state.push(action.payload);
        },
        // Action to update an existing field
        updateField: (state, action: PayloadAction<Field>) => {
            const index = state.findIndex(field => field.fieldId === action.payload.fieldId);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
        // Action to delete a field
        deleteField: (state, action: PayloadAction<Field>) => {
            return state.filter(field => field.fieldId !== action.payload.fieldId);
        }
    }
});

// Export the actions to be used in components
export const { addField, updateField, deleteField } = fieldSlice.actions;

// Export the reducer to be used in the store
export default fieldSlice.reducer;
