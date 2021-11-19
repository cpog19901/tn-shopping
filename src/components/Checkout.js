import React, {useState} from 'react';
import Nav from "../components/Nav";
import {TextField, Box, Button, Paper, Typography } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"

const useStyles = makeStyles({

    checkoutMainBox:{
        display: "flex",
        justifyContent:"center"
    },

    checkoutForm:{
        display: "flex",
    flexDirection: "column",
    margin: "auto"

    },
    checkoutPaper:{
        width: "fit-content",
        padding: "4%"
    },

    checkoutInput:{
        margin: "5px 0"
    },

    checkoutBtn:{
        margin: "15px 0"
    }
})



const Checkout = () => {

const getStoredItems = JSON.parse(window.localStorage.getItem('storedItems'));
    
console.log(getStoredItems);
const [orderInput, setOrderInput] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postalCode:"",
    phone: ""

})

const handleClick=()=>{
    localStorage.setItem("deliveryInfo", JSON.stringify(orderInput))
}

const handleChange =(e) =>{

const {name, value} = e.target;
setOrderInput((prevValue)=>{
  
    return{
    ...prevValue,
    [name]:value
    }
    
})
}

const classes = useStyles()

    return (
        <div>
           
           
       
        <Box className={classes.checkoutMainBox}>
         <Paper className={classes.checkoutPaper} elevation={12}>
            <Typography variant="h3">Personal details</Typography>
            <Box className={classes.checkoutForm}>            
            <TextField className={classes.checkoutInput} onChange={handleChange} name="email" value={orderInput.email} color="primary" label="Email address" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="firstName" value={orderInput.firstName} color="primary" label="First name" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="lastName" value={orderInput.lastName} color="primary" label="Last name" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="address" value={orderInput.address} color="primary" label="Address" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="apartment" value={orderInput.apartment}  color="primary" label="Apartment, suite, etc (optional)" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="city" value={orderInput.city} color="primary" label ="City" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="country" value={orderInput.country}  color="primary" label ="Country" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="postalCode" value={orderInput.postalCode}  color="primary" label ="Postal Code" variant="outlined" />
            <TextField className={classes.checkoutInput} onChange={handleChange} name="phone" value={orderInput.phone} color="primary" label="Phone" variant="outlined" />
             <Link to="/payment" style={{textDecoration: "none"}}><Button className={classes.checkoutBtn} variant="contained" color="primary" onClick={handleClick}>Proceed to payment information</Button></Link>
            </Box>
        </Paper>
        </Box>
        </div>
    );
};

export default Checkout;