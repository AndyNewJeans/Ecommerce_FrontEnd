import {useContext, useState} from "react";
import {  Container} from "@mui/material";
import OrderSummaryItem from "./Components/OrderSummary.tsx";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import { CartContext } from "../../CartContext.tsx";
import ShoppingCartItemBox from "./Components/ShoppingCartItemBox.tsx";
import * as TransactionApi from "../../api/TransactionApi.ts"
import {useNavigate} from "react-router-dom";

const ShoppingCart = () => {
    const [isCheckout, setIsCheckout] = useState<boolean>(false);
    const { cartDataList } = useContext(CartContext);
    const isCartEmpty = cartDataList.length === 0;
    const navigate = useNavigate();

    const handleCheckout = async () => {
        setIsCheckout(true);
        try {
            const transactionData = await TransactionApi.prepareTransaction();
            navigate(`/checkout/${transactionData.tid}`);
        } catch (error) {
            navigate("/404");
        }
    };

    return (
        <Container component="section" maxWidth="lg">
            <Navbar />
            <section className='cart'>
                <div className='cart-content'>
                    {!isCartEmpty ? (
                        <ShoppingCartItemBox cartDataList={cartDataList} />
                    ) : (
                        <p className='empty'>Your Cart Is Empty</p>
                    )}
                </div>
                    <OrderSummaryItem
                        cartDataList={cartDataList}
                        checkout={handleCheckout}
                        isCheckoutState={isCheckout}
                    />
            </section>
        </Container>
    );
};

export default ShoppingCart;


