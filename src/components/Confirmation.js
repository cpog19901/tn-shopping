import React from 'react';
import {Box, Typography, Paper, Grid, Button, AppBar, Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>{
    return{
confirmationBox:{
    display: "flex", 
    justifyContent:"center", 
    alignItems: "center",
    padding: "2%"
   
},

confirmationPaper:{
   width: "fit-content", 
   margin: "25px 0" 
},
confirmationDetailsBox:{
    display: "flex",
    margin: "50px 25px",
    flexDirection:"column",
    [theme.breakpoints.up('sm')]:{
        flexDirection: "row"
    }
},
confirmationImage:{
    width: "100%",
    [theme.breakpoints.up('sm')]:{
        width: "400px"
    }
},

orderDetailsBox:{
    display: "flex", 
    flexDirection:"column", 
    justifyContent: "center",
    padding: "2%",
   
},

confirmationHeading:{
    padding: "15px 0",
 backgroundColor: "#2cb05e",
 borderRadius: "10px",
 color:"whitesmoke"
},

returnButton:{
    margin: "10px"
}
    }
})

const Confirmation = () => {

    const classes= useStyles();

    return (
        <Box className={classes.confirmationBox}>
            <Paper className={classes.confirmationPaper} elevation={12} >
            <img src="images/tn-logo.png" alt="" />
                <Typography className={classes.confirmationHeading} variant="h5">Thank you for ordering with TN Shopping!</Typography>
                <Box className={classes.confirmationDetailsBox}>
                    <Box>
                    <img className={classes.confirmationImage} src="images/confirmation.jpg" alt="" />
                    </Box>
                    <Box className={classes.orderDetailsBox}>
                    <Typography variant="h5"> Your order number is 123456</Typography>
                    <Typography>Should you have any issues with your order please contact support@tnshopping.com</Typography>
                    </Box>
                </Box>
                <Button className={classes.returnButton} variant="contained" color="primary">Return to store</Button>
            </Paper>
        </Box>
    );
};

export default Confirmation;