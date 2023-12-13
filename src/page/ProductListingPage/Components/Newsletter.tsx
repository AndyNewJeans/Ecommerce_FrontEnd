import React from "react";
import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

const StyledBox = styled(Box)({
    backgroundColor: "#f4f1fc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center',
});

const StyledBoxInner = styled(Box)({
    padding:'60px 0',
});

const StyledInput = styled(Input)({
    width: "70%",
    border: "1px solid #444",
    padding:'3px 5px',
    borderRadius:'4px'
});

const StyledButton = styled(Button)({
    padding:'8px 0',
    borderRadius:'2px',
});

const Newsletter = () => {
    return (
        <StyledBox component='span' align="center">
            <StyledBoxInner component='span'>
                <Typography variant="h3" >Contact</Typography>
                <Typography variant="subtitle1" margin='10px 0 20px 0'>
                    Tell us your thoughts!
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <StyledInput type="text" />
                    <StyledButton variant="contained">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </StyledButton>
                </Box>
            </StyledBoxInner>
        </StyledBox>
    );
};

export default Newsletter;
