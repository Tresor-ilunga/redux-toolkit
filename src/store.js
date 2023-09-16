import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter.js";

export const store = configureStore({
    reducer: {
        counter 
    }
})