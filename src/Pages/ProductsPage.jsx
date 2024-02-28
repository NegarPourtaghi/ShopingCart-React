import React, { useEffect, useState } from "react";
import { UseProducts } from "../Context/ProductsContext";
import styles from './ProductsPage.module.css'
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import { GetInitialQuery, SearchProducts } from "../Helpers/Functions";
import { FilterProducts } from "../Helpers/Functions";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import SideBar from "../Components/SideBar";
const ProductsPage = () => {
    const Products=UseProducts();
    const [Displayed , setDisplayed]=useState([])
    const [Search, setSearch]=useState(" ")
    const [Query , setQuery]=useState({});
    const [SearchParams , setSearchParams]=useSearchParams();

    useEffect(()=>{
        setDisplayed(Products);
        setQuery(GetInitialQuery(SearchParams))


    },[Products])

    useEffect(()=>{
        setSearchParams(Query);
        setSearch(Query.Search)
       let FinalProducts= SearchProducts(Products,Query.Search);
       FinalProducts=FilterProducts(FinalProducts , Query.Category)
       setDisplayed(FinalProducts)

    },[Query])
    


    return (
       <div>
         <SearchBox Search={Search} setSearch={setSearch} setQuery={setQuery}/>
      
      <div className={styles.Container}>
          <div className={styles.Products}>
              {!Displayed.length && <Loading />}
              {
                  Displayed.map(item => <Card key={item.id} Product={item} />)
              }
              
          </div>
          <div>
             <SideBar setQuery={setQuery} Query={Query} />
          </div>
      </div>
      
       </div>
    );
};

export default ProductsPage;