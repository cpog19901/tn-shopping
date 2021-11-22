import React from 'react';
import { useParams }  from "react-router-dom";
import {Box, Typography, Paper, Grid, Button, AppBar, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import Nav from "./Nav"

const useStyles = makeStyles(theme=>{
    return{
    productImg : {
        width: "150px",
        
        [theme.breakpoints.down("xs")]:{
            width: "100%"
        }
    },
    
    productCard:{
    //  display: "flex",
    alignItems: "center",
    padding: "15px",
    marginBottom: "25px"
    },
    
    productBtn:{
        margin: "5px"
    },
    productDesc:{
        padding: "10px",
        textAlign: "justify"
    },
   productContainer:{
       justifyContent: "center",
       marginTop: "50px"
   },
    productPrice:{
textAlign:"right",
backgroundColor: "mediumaquamarine",
padding: "5px",
borderRadius:"10px",
margin: "auto",
width: "fit-content"


}
}
    });

const Product = ({allProducts, counter, addItem}) => {

    const classes = useStyles()

const {id} = useParams();

console.log(id)

    return (
        <>
     
        <Grid className={classes.productContainer} container>
            {allProducts.filter(product =>{
               
                if(product.title === id){

                    return product;
                }
            }).map((product, i)=>{
                return(
                    
                    <Grid item xs={6} key={i} id={i}>
                    <Paper className={classes.productCard} elevation={12}>
                    <Box>
                    
                    <img className={classes.productImg} src={product.image} alt="" />
                    </Box>
                    <Box>
                    <Typography variant="h6">{product.title}</Typography> 
                    <Typography className={classes.productPrice} variant="body1">
                        €{product.price.toFixed(2)}
                        </Typography>
                     <Typography variant="body2" className={classes.productDesc}>
                        {product.description}
                        </Typography>
                       
                        </Box>
                    <Button  variant="contained" color="primary">Add to basket</Button>
                    </Paper>
                    </Grid>
                  
                )
            })}
            </Grid>
       
        </>
    );
};

export default Product;