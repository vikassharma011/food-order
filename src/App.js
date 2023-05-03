import React, { Fragment, useState } from "react";

import Header from "./componenet/layout/Header.js";
import Meals from './componenet/meals/Meals';
import Cart from './componenet/cart/Cart.js';
import CartProvider from "./store/CartProvider.js";
function App(){
     const[cartIsShown,setCartIsShown]=useState(false);
     const showCartHandler=()=>{
          setCartIsShown(true);
     };
     const hideCartHandler=()=>{
      setCartIsShown(false);
     };
    return(
     <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
     </main>
    
     </CartProvider>
    );

}
export default App;