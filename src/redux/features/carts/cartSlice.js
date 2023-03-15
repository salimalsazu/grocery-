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
            const selectedProduct = state.cart.find((product) => product.id === action.payload.id)

            console.log(action.payload);

            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 }
                state.cart.push(product)
            }
            else {
                selectedProduct.quantity += 1;
                selectedProduct.price = selectedProduct.quantity * selectedProduct.singlePrice

                state.cart
                    .filter(product => product.id !== selectedProduct.id)
                    .push(selectedProduct)
            }

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

        // addToBuyIncrement: (state, action) => {
        //     console.log(state);

        //     const selectedProduct = state.buy.find((product) => product.id === action.payload.id)

        //     if (selectedProduct) {
        //         selectedProduct.quantity += 1;

        //         state.buy
        //             .filter(product => product.id !== selectedProduct.id)
        //             .push(selectedProduct)
        //     }
        // },
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
        }


    }
})

export const { addToCart, incrementQty, addToBuy, addToBuyIncrement, addToBuyDecrement } = cartSlice.actions;
export default cartSlice.reducer;