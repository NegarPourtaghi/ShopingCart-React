const MakeShort=(name)=>{
    return name.split(" ").slice(0,3).join(" ")

}

const SearchProducts=(products ,search)=>{
    if(!search) return products;
    const SearchedProduct=products.filter(item =>item.title.toLowerCase().includes(search));
    return SearchedProduct;
}
const FilterProducts=(products , category)=>{
    if(!category) return products;
    const FilteredProducts=products.filter(item => item.category === category);
    return FilteredProducts;
}
const CreateQueryObject=(currentQuery , newQuery)=>{

    if(newQuery.Category === "all"){
        const {Category , ...rest}=currentQuery;
        return rest
        
    }
    if(newQuery.Search === ""){
        const {Search ,...rest}=currentQuery;
        return rest
    }
    return {...currentQuery , ... newQuery}
}

const GetInitialQuery=(SearchParams) =>{
    const Query={};
        const Category=SearchParams.get("Category");
        const Search=SearchParams.get("Search");
        if(Category) Query.Category=Category;
        if(Search) Query.Search=Search; 
        return Query
}


const SumProducts=(Products)=>{
    const ItemsCounter=Products.reduce((acc , cur)=> acc+cur.Quantity ,0);
    const Total=Products.reduce((Total , cur)=> Total+cur.price*cur.Quantity ,0).toFixed(2)

return {ItemsCounter , Total}
}

const IsInCard=(id, state)=>{
!!state.SelectedItems.find(item => item.id !== id)
return true;
}

const ProductQuantity=(id , state)=>{
const Index=state.SelectedItems.findIndex(item => item.id === id)
if(Index === -1){
    return 0;
}else{
    return state.SelectedItems[Index].Quantity;

}
}


export {MakeShort , 
    SearchProducts ,
     FilterProducts , 
     CreateQueryObject,
      GetInitialQuery, 
      SumProducts,
      IsInCard,
      ProductQuantity}