import React, {useState} from 'react';
import {Box, Typography, Paper, Grid, Button, AppBar, Toolbar} from "@material-ui/core"
import {Link, useParams} from "react-router-dom"
import {makeStyles} from "@material-ui/core"
import Nav from "../components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(theme =>{
    return{
productImg : {
    width: "50%",
    margin: "20px 5px",
    height: "50%"
},

productCard:{
    height: "100%",
    width: "80%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    paddingBottom: "10px"
},
productTitle:{
    margin: "10px 5px",
    fontWeight: "600",
    height: "50%",
    display: "content"
    
    
},
productBtn:{
    margin: "5px",
    color: "white"
},

storeContainer:{
    width: "800px",
    margin:"auto",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]:{
        width: "100%"
    }
},
carousel:{
    margin: "50px auto 50px auto",
    width: "80%"
},
sloganGreen:{
fontWeight:"800",
color:"#009688"
},
sloganUnder:{

textDecoration: "underline"
},

categoryBox:{
display: "flex",
flexDirection: "column"
},

categoryButtonWomen:{
    background: `url(${"images/women-img.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "10%",
    margin: "15px",
    color: "white"
   
},

categoryButtonMen:{
    backgroundImage: `url(${"images/men-img.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "10%",
    margin: "15px",
    color: "white"
   
},

categoryButtonElectronics:{
    backgroundImage: `url(${"images/electronics-img.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "10%",
    margin: "15px",
    color: "white"
   
},
categoryButtonJewellery:{
    backgroundImage: `url(${"images/jewellery-img.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "10%",
    margin: "15px",
    color: "white"
},

categoryHeading:{
    backgroundColor: "#2cb05e",
    width: "fit-content",
    margin: "auto",
    padding: "10px", 
    borderRadius: "10px 10px 10px 0"
}
    
    }

});

const Store = ({allProducts, counter, addItem, assignFilter, filterValue}) => {

    const [itemStatus,setItemStatus]= useState("");

   const {category} = useParams()


   const pathName = window.location.pathname;
   

const handleClick = (e) =>{
  
const item = e.currentTarget.value;
console.log(item);
addItem(item);
 
}



const classes = useStyles()



    return (
        <>
        
       
        <Box className={classes.storeContainer}>
        <img className={classes.logoLarge} src="images/tn-logo.png" alt="" />
        {pathName == '/tn-shopping/' || pathName == '/'  ? <Box>
        <Typography variant="h3"><span className={classes.sloganUnder}>Behold the power</span> of<span className={classes.sloganGreen}>  TN Shopping!</span></Typography>
        <Carousel 
        className={classes.carousel} 
        showThumbs={false} 
        showStatus={false}>
                <div>
                    <img src="images/mens.jpg" />
                    <p style={{fontFamily: "Quicksand, cursive"}} className="legend">Checkout our new mens fashion line!</p>
                </div>
                <div>
                    <img src="images/womens.jpg" />
                    <p style={{fontFamily: "Quicksand, cursive"}} className="legend">Great prices on womens summer gear!</p>
                </div>
                <div>
                    <img src="images/ipad.jpg" />
                    <p style={{fontFamily: "Quicksand, cursive"}} className="legend">New iPad mini now available</p>
                </div>
            </Carousel>
            </Box> : null}

           {pathName == '/tn-shopping/' || pathName == '/' ?  <Box className={classes.categoryBox}>
                <Link to="/women's%20clothing" style={{textDecoration: "none"}}>
                <Box className={classes.categoryButtonWomen}>
                <Typography className={classes.categoryHeading} variant="h5">Women</Typography>
                </Box>
                </Link>
                <Link to="/men's%20clothing" style={{textDecoration: "none"}}>
                <Box className={classes.categoryButtonMen}>
                <Typography className={classes.categoryHeading} variant="h5">Men</Typography>
                </Box>
                </Link>
                <Link to="/electronics" style={{textDecoration: "none"}}>
                <Box className={classes.categoryButtonElectronics}>
                <Typography className={classes.categoryHeading} variant="h5">Electronics</Typography>
                </Box>
                </Link>
                <Link to="/jewelery" style={{textDecoration: "none"}}>
                <Box className={classes.categoryButtonJewellery}>
                <Typography className={classes.categoryHeading} variant="h5">Jewellery</Typography>
                </Box>
                </Link>
            </Box> : null}
      
         <Grid container spacing={6}>
           { allProducts.filter(product=>{
               if(product.category == category){
                   return product;
               } else if (product.category === undefined){
                   return product;
               }
           }).map((product, i) =>{
               return(
                  <Grid id={i} key={i} item xs={12} md={6} lg={4}>
                    <Paper className={classes.productCard} elevation={20}>
               
                   <Typography className={classes.productTitle} variant="body1">{product.title}</Typography>
               
                   <img className={classes.productImg} src={product.image} alt="" />
                   
                   <Typography variant="h6">€{product.price.toFixed(2)}</Typography>
                   <Link to={`/products/${product.title}`} style={{ textDecoration: 'none' }}>
                   <Button variant="contained" color="primary" className={classes.productBtn}>  <FontAwesomeIcon  icon={faEye} /> View product</Button>
                   </Link>
                   <Button variant="contained" value={product.title} color="secondary" className={classes.productBtn} onClick={handleClick}>  <FontAwesomeIcon  icon={faShoppingBasket} /> Add to Basket</Button>
                   <Typography variant="h6">{itemStatus}</Typography>
                   </Paper>
                   </Grid>
               )
           })
           }
           </Grid>
        </Box>
        </>
    );
};

export default Store;