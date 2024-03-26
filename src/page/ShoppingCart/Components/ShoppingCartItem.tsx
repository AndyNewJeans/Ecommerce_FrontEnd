import {useContext, useState} from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    styled,
    Typography
} from "@mui/material";
import deleteIcon from "../../../Pictures/icon-delete.svg";
import {CartItemDto} from "../../../data/CartItemDto.ts";
import "../../../App.css"
import QuantityButton from "../../ProductPage/Components/QuantityButton.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {LoginUserContext} from "../../../App.tsx";
import {Link, useNavigate} from "react-router-dom";
import {CartContext} from "../../../CartContext.tsx";

const StyledCard = styled(Card)({
    backgroundColor: '#8bc34a',
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
        transform: 'scale3d(1.05, 1.05, 1)'
    },
    display: 'flex',
    flexDirection: 'column',
});

const StyledTypography = styled(Typography)({
    fontSize: '18px', overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    fontFamily: "Kumbh Sans"
});

const StyledTypography2 = styled(Typography)({
    fontSize: '12px', overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    fontFamily: "Kumbh Sans"
});

const StyledCardContent = styled(CardContent)({
    overflow: 'visible', // Allows content to determine the size
    '& .MuiTypography-root': {
        wordWrap: 'break-word',
    },
    // Removed the fixed height to allow the content to define its own height
});

const StyledDeleteButton = styled(IconButton)({
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '8px',
    margin: '0',
    backgroundColor: 'rgba(255, 255, 255)',
    borderRadius: '50%',
    zIndex: 2,
});

type Props = {
    cartItemDto: CartItemDto;
};

const ShoppingCartItem = ({cartItemDto}: Props) => {
    const [quant, setQuant] = useState(cartItemDto.quantity);
    const loginUser = useContext(LoginUserContext);
    const { getShoppingCartDataList } = useContext(CartContext);
    const price = cartItemDto.product.price;
    const orderedQuant = cartItemDto.quantity;

    const navigate = useNavigate();

    const handleQuantityBlur = () => {
        if (quant !== cartItemDto.quantity) {
            handlePatchToCart();
        }
    };

    const handlePatchToCart = async () => {
        if (loginUser === null) {
            navigate('/login'); // Navigate to login page if user is not logged in
            return; // Prevent further execution
        }
        if (cartItemDto.product.pid) {
            await CartItemApi.patchCartItem(cartItemDto.product.pid, quant);
            getShoppingCartDataList(); // Refresh cart data
        }
    }

    const handleDeleteCart = async () => {
        if (loginUser === null) {
            navigate('/login'); // Navigate to login page if user is not logged in
            return; // Prevent further execution
        }
        if (cartItemDto.product.pid) {
            await CartItemApi.deleteCartItem(cartItemDto.product.pid);
            getShoppingCartDataList(); // Refresh cart data
        }
    }

    const handleChange = (newQuant:number) => {
        setQuant(newQuant);
    };

    const addQuant = () => {
        handleChange(quant + 1);
    };

    const removeQuant = () => {
        handleChange(quant > 0 ? quant - 1 : 0);
    };

    return (
        <Grid item md={4} sm={6} xs={12} style={{height: 'auto'}} key={cartItemDto.product.pid}>
            <StyledCard sx={{maxWidth: 345, m: {xs: 2, sm: 1}}}>
                <Link to={`/product/${cartItemDto.product.pid}`} style={{textDecoration: 'none'}}>
                    <CardMedia
                        component="img"
                        height="260"
                        image={cartItemDto.product.imageUrl}
                        alt="product image"
                        sx={{
                            p: 1, backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}
                    />
                </Link>
                <StyledCardContent>
                    <StyledTypography gutterBottom variant="h5">
                        {cartItemDto.product.name}
                    </StyledTypography>
                    <StyledTypography2 gutterBottom variant="h5">
                        <section className="description">
                            <div className="buttons">
                                <QuantityButton onQuant={quant} onRemove={removeQuant} onAdd={addQuant} onQuantityChange={handleQuantityBlur}/>
                                {`$${price.toFixed(2)} x ${orderedQuant}`}
                                <br/>
                                Subtotal: {`$${(price * orderedQuant).toFixed(2)}`}
                            </div>
                        </section>
                    </StyledTypography2>
                    <StyledDeleteButton
                        className='delete-button'
                        disableRipple
                        onClick={handleDeleteCart}
                    >
                        <img src={deleteIcon} alt='delete-item'/>
                    </StyledDeleteButton>
                </StyledCardContent>
            </StyledCard>
        </Grid>
    );
};

export default ShoppingCartItem;
