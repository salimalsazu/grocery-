import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
    cart: [],
    buy: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)

        },
        incrementQty: (state, action) => {
            const selectedIncProduct = state.cart.find((product) => product.id === action.payload.id);

            if (selectedIncProduct.quantity < selectedIncProduct.productQuantity) {
                selectedIncProduct.quantity += 1;
                action.payload.price = selectedIncProduct.quantity * selectedIncProduct.singlePrice;

                state.cart
                    .filter(product => product.id !== selectedIncProduct.id)
                    .push(selectedIncProduct);
            }
        },
        addToBuy: (state, action) => {
            state.buy.push(action.payload)
        },


        addToBuyIncrement: (state, action) => {

            state.buy = state.buy.map(product => {
                if (product.id === action.payload.id) {
                    product.quantity = product.quantity + 1
                }

                return product
            })


        },


        addToBuyDecrement: (state, action) => {
            console.log(state.buy);
            state.buy = {
                ...action.payload,
                quantity: state.buy.quantity - 1
            }
        },

        removeFromCart: (state, action) => {
            const deleteCart = state.cart.filter(cart => cart.id !== action.payload.id)
            return {
                ...state,
                cart: deleteCart
            }
        }

    }
})

export const { addToCart, incrementQty, addToBuy, addToBuyIncrement, addToBuyDecrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;