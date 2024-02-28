import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../Services/Config';

export const ProductsContext=createContext()

const ProductsProvider = ({children}) => {
    const [Products , setProducts]=useState([])

    useEffect(()=>{
        const GetData= async()=>{
            try {
                setProducts(await api.get("/products"))
            } catch (error) {
                console.log(error.message)
            }

        }

        GetData();
    },[])
    return (

        <ProductsContext.Provider value={Products}>
            {children}
        </ProductsContext.Provider>
      
      
    );
};

const UseProducts=()=>{
    const Products=useContext(ProductsContext);
    return Products
    }
const ProductsDetails=(id)=>{
    const Product=useContext(ProductsContext);
    const result=Product.find(item => item.id ===id);
    return result;
}
export default ProductsProvider;

export {UseProducts, ProductsDetails};