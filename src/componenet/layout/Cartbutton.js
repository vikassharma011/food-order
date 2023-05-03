import React from "react";
import { useContext } from "react";
import classes from "./Cartbutton.module.css";
import CartContext from "../../store/cart-context";

function Cartbutton(props){
    const cartCtx=useContext(CartContext);
  
  const numberOfCartItems= cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
   
    return(
        <>
        <button className={classes.button}  onClick={props.onClick}  >
        <span className={classes.icon}></span>
        <span>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        </>
    );
}
export default Cartbutton;