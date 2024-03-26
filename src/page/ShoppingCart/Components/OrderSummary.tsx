import Button from "@mui/material/Button";
import {CartItemDto} from "../../../data/CartItemDto.ts";
import Typography from "@mui/material/Typography";


type Props = {
    cartDataList: CartItemDto[];
    checkout: ()=>void;
    isCheckoutState: boolean
}


const OrderSummaryItem = ({ cartDataList, checkout, isCheckoutState }: Props) => {
    const totalPrice = cartDataList.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);

    return (
                <section className='cart'>
                    <div className='cart-content'>
                        <Typography variant="h6" component="div">
                            Total: <strong>${totalPrice.toFixed(2)}</strong>
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={checkout}
                            disabled={isCheckoutState}
                        >
                            Checkout
                        </Button>
                    </div>
                </section>
    );
};

export default OrderSummaryItem;
