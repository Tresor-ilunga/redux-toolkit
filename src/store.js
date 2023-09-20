import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter.js";
import fruits from "./features/fruits.js";
import fruitsCart from "./features/fruitsCart.js";
// import logger from "redux-logger";
import users from "./features/users.js";
import chrono from "./features/chrono.js";

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart,
        users,
        chrono
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})