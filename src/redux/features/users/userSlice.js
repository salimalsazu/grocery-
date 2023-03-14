import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    users: [
        {
            id: 1,
            user: "@salim",
            name: "Salim Al Sazu",
            image: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
            email: "sazusalim@gmail.com",
            role: "Admin",
            plan: "enterprise",
            status: 'pending',
        },

    ]
}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
