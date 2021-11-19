import React, {useState, useEffect} from 'react';
import Nav from "../components/Nav"
import {Typography, Button, TextField, MenuItem} from "@material-ui/core"
import {Link, useParams} from "react-router-dom"
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
     
basketHeading:{
fontWeight:"bold"
},
    
    basketItemCard:{
        display: "flex",
        alignItems: "center",
       padding: "20px",
      margin: "2%"
    },

    basketItemTitle:{
    width:"100%",
    margin: "0 4%"
    
    },

   basketItemImg:{
    width: "50px"
   },
   basketItemButton:{
    whiteSpace:"no-wrap",
    margin: "2%",
    backgroundColor: "mediumaquamarine",
    whiteSpace:"nowrap"
   },

   basketItemPrice:{
       width:"100%"
   },

   basketTable:{
       margin: "auto",
       textAlign: "left"  
   },
   basketTableData:{
       padding: "20px"
   }
    
    });

const Basket = ({basketProducts, removeItem}) => {

const pathName = window.location.pathname;






const classes = useStyles()

  const [totalCost, setTotalCost] = useState("");



  

   const getPrices = basketProducts.reduce((currentTotal, item)=>{
        return item.price + currentTotal
   },0)


    const handleClick =(e) =>{
        const productId = e.currentTarget.value;
        
        console.log(productId)
        removeItem(productId)
    }

    
    useEffect(() => {
       setTotalCost(getPrices.toFixed(2))
    }, [getPrices])


    return (
        <div style={{overflowX:"auto"}}>
       
      
        <table className={classes.basketTable}>    
        <tbody>  
        <tr>
            <th className={classes.basketTableData}>
           <Typography className={classes.basketHeading}>Item Name</Typography>
            </th>
            <th className={classes.basketTableData}>
                <Typography></Typography>
            </th>
            <th className={classes.basketTableData}>
                <Typography className={classes.basketHeading}>Price</Typography>
            </th>
            <th className={classes.basketTableData}>
            <Typography className={classes.basketHeading}>Quantity</Typography>
            </th>
        </tr>
        {
             basketProducts.map((basketProduct, i)=>{
                 
                 return (
                     
               
                  <tr key={basketProduct.id} id={basketProduct.id} >
                  <td className={classes.basketTabeData}>
                  <Typography className={classes.basketItemTitle}>{basketProduct.title}</Typography>
                  </td>
                   <td className={classes.basketTableData}>
                   <img className={classes.basketItemImg} src={basketProduct.image} alt="" />
                   </td>
                   <td className={classes.basketTableData}>
                   <Typography className={classes.basketItemPrice}>€{basketProduct.price.toFixed(2)}</Typography>
                   </td>
                   <td className={classes.basketTableData}>
                   <Typography>1</Typography>
                   </td>
                   <td className={classes.basketTableData}>
                   { pathName =="/basket" ?
                   <Button onClick={handleClick} color="primary" variant="contained" value={basketProduct.id}>Remove Item</Button>
                   : null
                   }
                   </td>
                     </tr>
                     
                    
                     
                 )
             })

           
          }


        
          <tr>
          <td className={classes.basketTableData}>
          
          </td>
          <td  className={classes.basketTableData}>
          { totalCost !=0 ? <Typography className={classes.basketHeading}>Total cost:</Typography>: null }
              </td>
              <td className={classes.basketTableData}>
              { totalCost !=0 ? <Typography className={classes.basketHeading}>€{totalCost}</Typography>: <Typography>Your basket is empty</Typography> }
              </td>
          </tr>
          </tbody>
          </table>
          { pathName =="/basket" ?
         <Link  to="/checkout" style={{textDecoration: "none"}}><Button variant="contained" color="primary">Proceed to checkout</Button></Link> 
         : <Link to="/basket" style={{textDecoration: "none"}}><Button variant="contained" color="primary">Edit basket</Button></Link> 
                   }
        </div>
    );
};

export default Basket;