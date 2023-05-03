import { useContext } from 'react';
import classes from './Mealitem.module.css';
import Mealitemform from './Mealitemform';
import CartContext from '../../../store/cart-context';

const Mealitem =(props)=>{
    //const price = '{props.price.toFixed(2)}';
    const cartCtx = useContext(CartContext);
    const AddToCartHandler=amount=>{
       cartCtx.addItem(
        {
            id:props.id,
            namee:props.name,
            amount:amount,
            price:props.price
        }
       )
    };

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description
                }>{props.description}</div>
                <div className={classes.price
                }>${props.price}</div>
            </div>
            <div>
                <Mealitemform onAddToCart={AddToCartHandler}/>
            </div>
        </li>
    );
};
export default Mealitem;