import React from 'react';
import { Link } from 'react-router-dom';
import {TbListDetails, TbShoppingBag} from 'react-icons/tb'
import { IsInCard, MakeShort, ProductQuantity } from '../Helpers/Functions';
import styles from './Card.module.css'
import { UseCart } from '../Context/CartContext';
import {MdDeleteOutline} from 'react-icons/md'

const Card = ({Product}) => {

   const [state ,  dispatch]=UseCart();
    const {id, title, image ,price}=Product
    return (
        <div className={styles.Card}>
            <img src={image} alt={title}/>
            <h3>{MakeShort(title)}</h3>
            <p>{price} $</p>
            <div className={styles.Actions}>
                <Link to={`/ProductsPage/${id}`} ><TbListDetails /></Link>
                <div>
                {
                        ProductQuantity(id, state) === 1 &&
                        <button onClick={()=>{dispatch({type:"REMOVE_ITEM", payload:Product})}}><MdDeleteOutline /></button>
                    }
                    {
                        ProductQuantity(id, state) > 1 &&
                        <button onClick={()=>{dispatch({type:"DECREASE", payload:Product})}}>-</button>


                    }
                    {
                        ProductQuantity(id , state) >0 && <span>{ProductQuantity(id , state)}</span>
                    }
                    {
                        ProductQuantity(id , state) === 0
                        ?<button onClick={()=>{dispatch({type:"ADD_ITEM", payload:Product})}}><TbShoppingBag /></button>
                        :<button onClick={()=>{dispatch({type:"INCREASE", payload:Product})}}>+</button>

                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Card;