import { configureStore } from "@reduxjs/toolkit";
import cropReducer from "../store/slice/CropSlices.ts";
import fieldReducer from "../store/slice/FieldSlices.ts";

export const store = configureStore({
    reducer: {
        crops: cropReducer, // Crop reducer for managing crop state
        fields: fieldReducer, // Field reducer for managing field state
    },
});

// Export RootState and AppDispatch types for better TypeScript integration
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;