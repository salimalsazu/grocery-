import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/carts/cartSlice";
import productsSlice from "../features/products/productsSlice";
import userSlice from "../features/users/userSlice";

export const store = configureStore({
    reducer: {

        products: productsSlice,
        users: userSlice,
        cart: cartSlice
    },
})