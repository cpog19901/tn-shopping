import React from 'react';
import {Typography, Button, TextField, MenuItem, Box, Paper} from "@material-ui/core";
import Nav from "../components/Nav";
import Basket from "../components/Basket";
import {makeStyles} from "@material-ui/core/styles"; 
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme=>{
return{
paymentHeading:{
 padding: "15px",
 backgroundColor: "#2cb05e",
 borderRadius: "10px",
 color:"whitesmoke"
},

paymentPaper:{
    
    margin: "10px auto",
    padding: "2%",
    [theme.breakpoints.up("sm")]:{
        width: "fit-content",
        }

},

deliveryCardBox:{
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-evenly",
    margin: "50px 0",
    [theme.breakpoints.up("md")]:{
        flexDirection: "row",
        }
    
},

cardPaymentBox:{
    // margin: "50px 0"
},

cardPaymentInputs:{
    textAlign: "justify",
    margin: "15px auto",
    display: "flex",
    width: "fit-content",
    flexDirection: "column",
},

cardInput:{
margin: "10px 0"
},

deliveryInputsBox:{
    margin: "50px 0"
}
}
})

const Payment = ({basketItems, completePurchase}) => {

    const handleClick =()=>{
        const createdOrderNumber = uuidv4()
        completePurchase(createdOrderNumber)
    }

    const classes = useStyles();

   const deliveryDetails = JSON.parse(localStorage.getItem("deliveryInfo"));
 
    return (
        <div>
          
       
        <Paper elevation={12} className={classes.paymentPaper} >
        <Box style={{display: "flex", flexDirection:"column"}}>
        <Box>
        <Typography variant="h4" className={classes.paymentHeading}>Order Summary</Typography>
            <Basket
            basketProducts={basketItems}
             />
          </Box>   
          <Box className={classes.deliveryCardBox}>
          <Box style={{margin: "25px"}}>
                <Typography variant="h4" className={classes.paymentHeading}>Delivery Details</Typography>
                <Box className={classes.deliveryInputsBox}>
               
                <table style={{textAlign: "justify", margin:"auto"}}>
                <tbody>
                <tr>
                    <td>
                    <Typography style={{fontWeight: "bold"}}>Full name: </Typography>
                    </td>
                    <td>
                    <Typography>{deliveryDetails.firstName}  {deliveryDetails.lastName}</Typography>
                    </td>
                </tr>
                <tr>
                <td>
                <Typography style={{fontWeight: "bold"}}>Address: </Typography>
                </td>
                <td>
                <Typography>{deliveryDetails.address}</Typography>
                </td>
                </tr>
                <tr>
                <td>
                <Typography></Typography>
                </td>
                <td>
                <Typography>{deliveryDetails.city}</Typography>
                </td>
                </tr>
                <tr>
                <td>
                <Typography></Typography>
                </td>
                <td>
                <Typography>{deliveryDetails.country}</Typography>
                </td>
                </tr>
                <tr>
                <td>
                <Typography></Typography>
                </td>
                <td>
                <Typography>{deliveryDetails.postalCode}</Typography>
                </td>
                </tr>
                <tr>
                <td>
                <Typography style={{fontWeight: "bold"}}>Phone: </Typography>
                </td>
                <td>
                <Typography>{deliveryDetails.phone}</Typography>
                </td>
                </tr>
                <tr>
                <td>
                <Typography style={{fontWeight: "bold"}}>Email: </Typography>
                </td>
                <td>
                <Typography>{deliveryDetails.email}</Typography>
                </td>
                </tr>
                
                           
                            
                            </tbody>
                </table>
              <img style={{width: "50%"}} src="images/confirmation.jpg" alt="" />
                </Box>
              
            </Box>
            <Box style={{margin: "25px"}}>
                        
                 <Typography variant="h4" className={classes.paymentHeading}>Card details</Typography>
                 <Box className={classes.cardPaymentInputs}>
                 <Typography>Card number</Typography>
                 <TextField className={classes.cardInput} variant="outlined" inputProps={{ maxLength: 16 }}></TextField>
                 <Typography>Expiry</Typography>
                 <TextField className={classes.cardInput}  variant="outlined" placeholder="MM"></TextField>
                 <TextField className={classes.cardInput}  variant="outlined" placeholder="YY"></TextField>
                 <Typography>Name on card</Typography>
                 <TextField className={classes.cardInput}  variant="outlined"></TextField>
                 <Typography>Card security code</Typography>
                 <Typography>The last 3 digits at the back of your card.</Typography>
                 <TextField className={classes.cardInput}  variant="outlined"></TextField>
                 
                 </Box>
            
            </Box>
            </Box>   
            </Box>
            <Link to="/confirmation"><Button variant="contained" color="primary" onClick={handleClick} >Complete payment</Button></Link>
         </Paper>
         

  
          
            
        
        </div>
    );
};

export default Payment;