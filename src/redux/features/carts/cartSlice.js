import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;