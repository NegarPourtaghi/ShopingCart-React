import React from 'react';
import { UseCart } from '../Context/CartContext';
import { MakeShort } from '../Helpers/Functions';
import { MdDeleteOutline } from 'react-icons/md';
import styles from './CheckoutPage.module.css'
import { TbChecklist } from 'react-icons/tb';
import {FaHashtag} from 'react-icons/fa'
import {BsPatchCheck} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const CheckoutPage = () => {
    const [state , dispatch]=UseCart();

    if(!state.ItemsCounter){
        return <div>
            <p>is empty</p>
        </div>
    }
    return (
        <div className={styles.Container}>
            <div className={styles.Sidebar}>
                <div>
                <p><TbChecklist /> Total: </p>
                <span>{state.Total}</span>
                </div>
                <div>
                <p><FaHashtag/> Quantity: </p>
                <span>{state.ItemsCounter}</span>
                </div>
                <div>
                <p><BsPatchCheck /> Status:</p>
                {state.Checkout === false && <span>Is Pending....</span>}
                </div>
                <Link onClick={()=>{dispatch({type:"CHECKOUT"})}} to="/Success">Checkout</Link>

            </div>
            <div >
                {
                    state.SelectedItems.map(item => 
                    <div key={item.id} className={styles.Card}>
                        <img src={item.image} alt={item.title} />
                            <p>{MakeShort(item.title)}</p>
                            <span>{item.price * item.Quantity} $</span>
                            <div className={styles.Actions}>
                           {
                            item.Quantity === 1 && 
                            <button onClick={() => {dispatch({type:"REMOVE_ITEM", payload: item})}}><MdDeleteOutline /></button>
                           }
                           {
                            item.Quantity > 1 &&
                            <button onClick={() => {dispatch({type:"DECREASE", payload: item})}}>-</button>
                           }
                           <span>{item.Quantity}</span>
                           <button onClick={() => {dispatch({type:"INCREASE" , payload:item})}}>+</button>
                            </div>


                    </div> )
                }
            </div>
        </div>
    );
};

export default CheckoutPage;