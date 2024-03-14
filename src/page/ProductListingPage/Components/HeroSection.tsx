import { Button, Grid, Typography } from "@mui/material";
import heroimg from "../../../Pictures/heroimg.jpg";
import { Box } from "@mui/system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShop} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{backgroundColor:'#F8F9F8', height:'900'}}

        >
            <Grid item xs={12} md={6}>
                <Box
                    component="img"
                    sx={{
                        height: "auto",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: 167 },
                        //   maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={heroimg}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                display="flex"
                container direction="column"
                justifyContent="center"
                alignItems="center"
                textAlign='center'
            >
                <Typography variant="h2"
                            sx={{fontWeight:'bold', fontSize:{xs:'3rem', md:'3rem', lg:'3rem', fontFamily: "Kumbh Sans"}}}
                >Fruit Store</Typography>
                <Typography variant="h4"
                            sx={{fontWeight:'normal', fontSize:'1.5rem', fontFamily: "Kumbh Sans"}}
                >
                    Buy Our Fruit
                </Typography>
                <Typography variant="h4"
                            sx={{fontWeight:'normal', fontSize:'1.5rem', fontFamily: "Kumbh Sans"}}
                >
                    RIGHT NOW!
                </Typography>
                <Box p={3}>
                    <Link to="/">
                    <Button id={"buttons"} variant="contained" sx={{padding:'10px 50px'}} style={{backgroundColor:"#438d20"}} ><FontAwesomeIcon icon={faShop} /></Button>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    );
};

export default HeroSection;
