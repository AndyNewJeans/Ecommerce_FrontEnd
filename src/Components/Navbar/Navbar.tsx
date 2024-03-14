import {useContext, useEffect, useState} from "react";
import logo from "../../Pictures/logo.webp";
import { Badge, Button, IconButton } from "@mui/material";
import {faCartShopping, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { LoginUserContext } from "../../App.tsx";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts";
import Cart from "./Components/Cart.tsx";
import { CartContext } from '../../CartContext.tsx';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const { cartDataList, getShoppingCartDataList } = useContext(CartContext);
    const loginUser = useContext(LoginUserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(loginUser){
        getShoppingCartDataList();
        }
    }, [loginUser]);

    const totalProductCount = cartDataList?.reduce((total, item) => total + item.quantity, 0) || 0;

    const handleCartToggle = () => setShowCart(!showCart);
    const handleSignOut = () => FirebaseAuthService.handleSignOut();
    const handleLogin = () => navigate("/login");

    return (
        <header>
            <nav>
                {/* Left Section */}
                <section className="left">
                    <div className="imgs">
                        <Link to="/">
                            <img src={logo} alt="logo" style={{ height: "56px" }} />
                        </Link>
                    </div>
                </section>

                {/* Right Section */}
                <section className="right">
                    {loginUser ? (
                        <>
                            <span>{loginUser.email}</span>
                            <IconButton disableRipple onClick={handleCartToggle}>
                                <Badge badgeContent={totalProductCount} variant="standard">
                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#438d20" }} />
                                </Badge>
                            </IconButton>
                            <Button onClick={handleSignOut}>
                                <FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{ color: "#f00000" }} />
                            </Button>
                            {showCart && <Cart cartDataList={cartDataList} />}
                        </>
                    ) : (
                        <Button onClick={handleLogin}>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#438d20" }} size="xl" />
                        </Button>
                    )}
                </section>
            </nav>
        </header>
    );
};

export default Navbar;
