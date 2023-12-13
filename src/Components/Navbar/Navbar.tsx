import React, { useState } from "react";
import logo from "../../Pictures/logo.webp";
import {Badge, IconButton, ListItemButton} from "@mui/material";
import Cart from "./Components/Cart.tsx";
import MobileLinksDrawer from "../../page/ProductPage/Components/MobileLinksDrawer.tsx";
import {faBars, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Navbar = ({ onOrderedQuant, onReset }) => {
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
  };

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
        <div className="right">
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
            <Link to={"/login"}>
          <FontAwesomeIcon icon={faUser} style={{color: "#438d20",}} size={"xl"}/>
            </Link>
          {showCart && (
            <Cart
              onOrderedQuant={onOrderedQuant}
              onReset={onReset}
              onShow={setShowCart}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
