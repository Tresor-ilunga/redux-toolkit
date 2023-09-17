import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter.js";
import fruits from "./features/fruits.js";

export const store = configureStore({
    reducer: {
        counter,
        fruits
    }
})