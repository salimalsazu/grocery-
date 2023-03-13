import { createBrowserRouter } from "react-router-dom";
import AddNewProduct from "../components/AddNewProduct";
import AddNewUser from "../components/AddNewUser";
import AllUsers from "../components/AllUsers";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import LeftSide from "../Pages/LeftSide";
import Login from "../Pages/Login";
import Main from "../Pages/Main";
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/dashboard',
                element: <LeftSide></LeftSide>,
                children: [
                    {
                        path: '/dashboard/allUser',
                        element: <AllUsers />
                    },
                    {
                        path: '/dashboard/adduser',
                        element: <AddNewUser />
                    },
                    {
                        path: '/dashboard/addProduct',
                        element: <AddNewProduct />
                    },
                ]
            },

            {
                path: '/cart',
                element: <Cart />
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },

        ]
    }
])