import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"

const useStyles = makeStyles(theme =>{
    return{
    footer:{
        width: "100%",
        // height: "150px",
        background: "-webkit-linear-gradient(to right, #38ef7d, #11998e)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #38ef7d, #11998e)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2% 0",
        flexDirection: "column",
        color: "#232324",
        [theme.breakpoints.up("sm")]:{
            flexDirection: "row",
            }
        
    },
    footerImg:{
        width: "150px"
    },
    footerGroup:{
        listStyleType: "none",
        fontFamily:  'Quicksand, cursive', 
        [theme.breakpoints.down("sm")]:{
            padding: "0",
            }
        
    },

    footerGroupHeader:{
        fontWeight: "600",
        marginBottom: "10px"
    }
    }
})

const Footer = () => {

const classes = useStyles();

    return (
        <footer className={classes.footer}>
       <div>
            <img className={classes.footerImg} src="/tn-shopping/images/tn-logo.png" alt="" />
            </div>
            <div>
                <ul className={classes.footerGroup}>
                    <li className={classes.footerGroupHeader}>About Us</li>
                    <li>About TN-Shopping</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li>Site Map</li>
                </ul>
            </div>
            <div>
                <ul className={classes.footerGroup}>
                    <li className={classes.footerGroupHeader}>My TN Account</li>
                    <li>My Account</li>
                    <li>Order Status</li>
                    <li>TN Unlimeted Shipping</li>
                    <li>Top-Notch Subscription</li>
                    
                </ul>
            </div>
            <div>
                <ul className={classes.footerGroup}>
                    <li className={classes.footerGroupHeader}>Ways to Shop</li>
                    <li>Just Arrived</li>
                    <li>Bestsellers</li>
                    <li>Gift Cards</li>
                    <li>Beauty Offers</li>
                </ul>
            </div>
            <div>
                <ul className={classes.footerGroup}>
                    <li className={classes.footerGroupHeader}>Help and FAQs</li>
                    <li>Online Ordering</li>
                    <li>Shipping</li>
                    <li>Billing</li>
                    <li>Returns and Exchanges</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;