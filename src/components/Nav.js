import React from 'react';
import {li, AppBar, Toolbar, Box, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


const useStyles = makeStyles( theme => {
return {
nav:{
background: "#11998e",  /* fallback for old browsers */
background: "-webkit-linear-gradient(to right, #38ef7d, #11998e)",  /* Chrome 10-25, Safari 5.1-6 */
background: "linear-gradient(to right, #38ef7d, #11998e)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position: "relative"
},

navBtn:{
    
   padding: "15px",
    color: "white",
    
    "&:hover":{
                
                color: "#33322f",
               
            },
},

navLogo:{
    width: "100px",
},

allNavBtns:{
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    [theme.breakpoints.up("sm")]:{
           flexDirection: "row",
           justifyContent: "center"
        }   
},
navBasket:{
   marginLeft: "10px",
   fontSize: "25px",
    color: "white",
},

navCounter:{
    padding: "10px",
    display: "inline",
    color: "white",
    fontFamily: 'Quicksand, cursive'
},

basketIconBox:{
   position: "absolute",
   top: "0",
   right: "0",
   padding: "25px"
}
}

})

const Nav = ({counter, assignFilter}) => {

   

    const classes = useStyles()

    return (
        <nav className={classes.nav} >

        <Box className={classes.basketIconBox}>
        <Link style={{textDecoration: "none"}} to="/basket"><FontAwesomeIcon className={classes.navBasket} icon={faShoppingCart} /></Link>
        <Box className={classes.navCounter}>{counter}</Box> 
        </Box>

            <Box className={classes.navAppBar}>
          
           
        
        <Link to="/tn-shopping/"><img className={classes.navLogo} src="images/tn-logo.png" alt="" /></Link>

        
        </Box>
           <Box className={classes.allNavBtns}>
         
           <Link className={classes.navBtn} style={{textDecoration: "none"}} to="/women's clothing"> <Typography> Womens</Typography></Link>
           <Link className={classes.navBtn} style={{textDecoration: "none"}} to="/men's clothing"><Typography>Mens</Typography></Link>
           <Link className={classes.navBtn} style={{textDecoration: "none"}} to="/electronics"> <Typography>Electronics</Typography></Link>
           <Link className={classes.navBtn} style={{textDecoration: "none"}} to="/jewelery"><Typography> Jewelery</Typography></Link>     
           
          
           
            
          
            
        
        </Box>
        </nav>
    );
};

export default Nav;