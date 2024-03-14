import {createBrowserRouter} from "react-router-dom";
import Home from "../page/ProductListingPage";
import ProductPage from "../page/ProductPage";
import Login from "../page/LoginPage/Login.tsx";
import Checkout from "../page/Checkout/Checkout.tsx";
import Error from "../page/Error/Error.tsx";
import ShoppingCart from "../page/ShoppingCart/ShoppingCart.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"/product/:productId",
        element:<ProductPage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/checkout/:transactionId",
        element:<Checkout/>
    },
    {
        path:"/404",
        element:<Error/>
    },
    {
        path:"/cart",
        element:<ShoppingCart/>
    }
]);

export default router;