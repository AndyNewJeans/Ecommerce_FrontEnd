import React, {useContext, useEffect, useState} from "react";
import logo from "../../Pictures/logo.webp";
import {Badge, Button, IconButton, ListItemButton} from "@mui/material";
import Cart from "./Components/Cart.tsx";
import MobileLinksDrawer from "../../page/ProductPage/Components/MobileLinksDrawer.tsx";
import {faBars, faCartShopping, faRightFromBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {LoginUserContext} from "../../App.tsx";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts"
import * as CartItemApi from "../../api/CartItemApi.ts";

const Navbar = ({ onOrderedQuant, onReset }) => {
    const [quant, setQuant] = useState(0);
    const [orderedQuant, setOrderedQuant] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = (val) => {
    setOpen(val);
  };
    const resetQuant = () => {
        setQuant(0);
        setOrderedQuant(0);
    };

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate();

  const renderLoginUser = () => {
    if(loginUser){
      return (
          <>
            <div className="right">
              {loginUser.email}
              <IconButton
                  disableRipple
                  onClick={() => {
                    setShowCart(!showCart);
                  }}
              >
                <Badge
                    invisible={onOrderedQuant === 0}
                    badgeContent={onOrderedQuant}
                    variant="standard"
                    sx={{
                      color: "#fff",
                      fontFamily: "Kumbh sans",
                      fontWeight: 700,
                      "& .css-fvc8ir-MuiBadge-badge ": {
                        fontFamily: "kumbh sans",
                        fontWeight: 700,
                      },
                    }}
                >
                  <FontAwesomeIcon icon={faCartShopping} style={{color: "#438d20",}} />
                </Badge>
              </IconButton>
              <Button onClick={()=> FirebaseAuthService.handleSignOut()}>
                <FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{color: "#f00000",}} />
              </Button>
              {showCart && (
                  <Cart
                      onOrderedQuant={onOrderedQuant}
                      onReset={resetQuant}
                      onShow={setShowCart}
                  />
              )}
            </div>
          </>
      )
    } else {
      return (
          <Button onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} style={{color: "#438d20"}} size={"xl"}/>
          </Button>
      )
    }
  }

  return (
    <header>
      <nav>
        <section className="left">
          <div className="imgs">
            <FontAwesomeIcon icon={faBars}
              className="hide-in-desktop"
              onClick={() => {
                handleOpen(true);
              }}
            />
            <MobileLinksDrawer onHandleOpen={handleOpen} onOpen={open} />
              <Link to={"/"}>
            <img src={logo} alt="logo" style={{height: "56px"}}/>
              </Link>
          </div>
          <div className="links hide-in-mobile">
            <List>
              <ListItem>
                  <Link to="/">Product</Link>
              </ListItem>
              <ListItem>
                <Link to="/">About</Link>
              </ListItem>
            </List>
          </div>
        </section>
        {renderLoginUser()}
      </nav>
    </header>
  );
};

export default Navbar;
