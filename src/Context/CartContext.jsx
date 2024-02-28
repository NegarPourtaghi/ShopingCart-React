import React, { createContext, useContext, useReducer } from 'react';
import { SumProducts } from '../Helpers/Functions';
const CartContext=createContext()

const initialState={
    SelectedItems:[],
    ItemsCounter:0,
    Totla:0,
    Checkout:false,
}
const reducer=(state , action)=>{
    switch (action.type) {
        case "ADD_ITEM":
         if(!state.SelectedItems.find(item => item.id === action.payload.id)){
                state.SelectedItems.push({ ...action.payload,Quantity:1})
         }
    return{
        ...state,
        ...SumProducts(state.SelectedItems),
        Checkout:false,
    }

    case "REMOVE_ITEM":
    const newItems=state.SelectedItems.filter(item => item.id !== action.payload.id);
    return{
        ...state,
        SelectedItems:[...newItems],
        ...SumProducts(newItems)
    }

    case "INCREASE":
      const Index=state.SelectedItems.findIndex(item => item.id === action.payload.id);
      state.SelectedItems[Index].Quantity++;
      console.log(state.SelectedItems[Index].Quantity
        )
      return{
        ...state,
        ...SumProducts(state.SelectedItems)
      }

      case "DECREASE":
        const IndexD=state.SelectedItems.findIndex(item => item.id === action.payload.id);
      state.SelectedItems[IndexD].Quantity--;
      return{
        ...state,
        ...SumProducts(state.SelectedItems)
      }
      case "CHECKOUT":
        return{
            SelectedItems:[],
            ItemsCounter:0,
            Totla:0,
            Checkout:true
        }
        case "CLEAR":
            return{
                SelectedItems:[],
            ItemsCounter:0,
            Totla:0,
            Checkout:false
            }
        default:
            throw new Error("invalid action")

    }
}
const CartProvider = ({children}) => {
    const [state , dispatch]=useReducer(reducer , initialState)
    return (
       <CartContext.Provider value={{state, dispatch}}>
        {children}
       </CartContext.Provider>
    );
};
const UseCart=()=>{
    const {state, dispatch}=useContext(CartContext);
    return [state, dispatch]
}
export default CartProvider;

 

export{UseCart}
