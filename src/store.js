import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter.js";
import fruits from "./features/fruits.js";
import fruitsCart from "./features/fruitsCart.js";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})