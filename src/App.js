
import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Store from "./components/Store";
import axios from 'axios';
import Product from "./components/Product"
import Basket from "./components/Basket"
import Checkout from "./components/Checkout"
import Confirmation from "./components/Confirmation"
import Payment from "./components/Payment"
import Nav from "./components/Nav"
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import Footer from "./components/Footer"

let basketItemsArray =[];

const theme = createTheme({
 
 typography: {
   fontFamily: [
     'Quicksand', 
     "cursive"
   ].join(",")
 },

 body1:{
   fontFamily: ['Quicksand','sans-serif'].join(),
 },
 palette: {
   primary: {
     main: "#009688"
   },
   secondary:{
     main: "#2cb05e"
   }
 }
})


function App() {


  
const [allProducts, setAllProducts] = useState([]);
const [counter, setCounter] = useState(0);
const [basketItems, setBasketItems] = useState([]);
const [order, setOrder] = useState("");





const addItem = (itemName) =>{

  
const foundProduct = allProducts.find((product)=>{ return product.title ===itemName});
foundProduct.id = uuidv4();

basketItemsArray.push(foundProduct);

setCounter(counter + 1);

  setBasketItems(prevProducts =>{
        return [...prevProducts, foundProduct];
  })

//  const getPreviousItems = JSON.parse(localStorage.getItem('storedItems'))

//  console.log(basketItemsArray)
//   localStorage.setItem('storedItems', JSON.stringify(basketItemsArray))
  
}

const removeItem = (itemId) =>{

  setCounter(counter - 1);
  console.log(itemId)
  setBasketItems((prevBasketItems)=>{
    console.log(prevBasketItems)
   return prevBasketItems.filter((basketItem)=>{
      
       if (basketItem.id !== itemId){
       return basketItem;
       }
    })
  })

 
}

const sendOrder = (orderId) =>{

const order= {
  orderRef: orderId,
  orderItems: basketItems,
  orderDeliveryInfo: ""
}

fetch("http://localhost:8000/posts",{
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({order})
}
)


}


  useEffect(()=>{
      axios.get('https://tn-store-db.herokuapp.com/products')
      .then(res => setAllProducts(res.data))
      .catch(err =>{
        console.log(err)
      })

  },[])


  

 
  return (
    <div className="App">
   <ThemeProvider theme={theme}> 
     <Router>
     <Nav
     counter={counter}
      />
    <Switch>
    <Route path="/" exact render={() => <Store allProducts={allProducts} counter={counter} addItem={addItem}/>}  />
    <Route path="/products/:id"  render={() => <Product allProducts={allProducts} counter={counter} addItem={addItem}/>}  />
    <Route path="/basket"  render={() => <Basket allProducts={allProducts} counter={counter} basketProducts={basketItems} removeItem={removeItem} />}  />
    <Route path="/checkout"  render={() => <Checkout counter={counter}  removeItem={removeItem}/>}  />
    <Route path="/payment"  render={() => <Payment counter={counter} basketItems={basketItems} completePurchase={sendOrder}/>}  />
    <Route path="/confirmation"  render={() => <Confirmation basketItems={basketItems}/>}  />
    <Route path="/:category"  render={() => <Store allProducts={allProducts} counter={counter} setCounter={setCounter} addItem={addItem}/>}  />
    
  
    </Switch>
    <Footer/>
    </Router> 
    </ThemeProvider>
    </div>
  );
}

export default App;
