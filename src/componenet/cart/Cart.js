import classes from './Cart.module.css';
import { useContext } from 'react';
import React from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './Cartitem';

const Cart = (props)=>{
    const cartCtx=useContext(CartContext);

    const totalAmount=cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler=id=>{};
    const cartItemAddHandler=item=>{};
    const cartitems=(<ul className={classes['cart-item']}>{cartCtx.items.map((items)=>(<CartItem key={items.id} name={items.name} amount={items.amount} price={items.price} onRemove={cartItemRemoveHandler.bind(null,items.id)} onAdd={cartItemAddHandler.bind(null,items)}/>))}</ul>);

    return(
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose} >close</button>
                {hasItems && < button className={classes.button}>Order</button>}
            </div>
            </Modal>
    );
};
export default Cart; 