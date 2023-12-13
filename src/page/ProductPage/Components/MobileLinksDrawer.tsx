import { Drawer, IconButton } from "@mui/material";
import React from "react";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MobileLinksDrawer = ({ onOpen, onHandleOpen }) => {
  return (
    <Drawer
      className="mobile-drawer hide-in-desktop"
      anchor="left"
      transitionDuration={400}
      open={onOpen}
      onClose={() => {
        onHandleOpen(false);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        height: "100vh",
      }}
    >
      <div className="draw" style={{ width: "65vw" }}>
        <section className="closing">
          <IconButton
            disableRipple
            onClick={() => {
              onHandleOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </IconButton>
        </section>
        <section className="mobile-links">
          <ul>
            <li>
              <button>Prodcuts</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </section>
      </div>
    </Drawer>
  );
};

export default MobileLinksDrawer;
