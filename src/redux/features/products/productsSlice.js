import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    products: [
        {
            id: 1,
            name: "The Bachelor Pack Puti Fish Processed",
            price: 99,
            image: "https://chaldn.com/_mpimage/the-bachelor-pack-puti-fish-processed-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129005&q=best&v=1&m=400&webp=1",
            stock: 10
        },
        {
            id: 2,
            name: "Banana Chompa (4pc)",
            price: 15,
            image: "https://chaldn.com/_mpimage/banana-chompa-ready-to-eat-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116416&q=best&v=1&m=400&webp=1",
            stock: 10
        },
        {
            id: 3,
            name: "Potato Regular (± 50 gm)",
            price: 25,
            image: "https://chaldn.com/_mpimage/potato-regular-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81244&q=best&v=1&m=400&webp=1",
            stock: 10
        },
        {
            id: 4,
            name: "Cinnamon (Daruchini) Whole",
            price: 55,
            image: "https://chaldn.com/_mpimage/cinnamon-daruchini-whole-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48355&q=best&v=1&m=400&webp=1",
            stock: 20
        },
    ]
}


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        }
    }
})

export const { addToProduct } = productSlice.actions;
export default productSlice.reducer;