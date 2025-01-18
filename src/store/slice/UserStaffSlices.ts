import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Staff} from "../../models/StaffModel.ts";


// Define the initial state as an empty array of staff
const initialState: Staff[] = [];

// Create the slice with actions and reducers
const staffSlice = createSlice({
    name: 'staff', // Name of the slice
    initialState,
    reducers: {
        // Action to add a new staff member
        addStaff: (state, action: PayloadAction<Staff>) => {
            state.push(action.payload);
        },
        // Action to update an existing staff member
        updateStaff: (state, action: PayloadAction<Staff>) => {
            const index = state.findIndex(staff => staff.staffId === action.payload.staffId);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
        // Action to delete a staff member
        deleteStaff: (state, action: PayloadAction<string>) => {
            return state.filter(staff => staff.staffId !== action.payload);
        }
    }
});

// Export the actions to be used in components
export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;

// Export the reducer to be used in the store
export default staffSlice.reducer;