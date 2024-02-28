import React from 'react';
import {ImSearch} from 'react-icons/im'
import { CreateQueryObject } from '../Helpers/Functions';
import styles from './SearchBox.module.css'

const Search = ({Search , setSearch , setQuery}) => {
    const SearchHandler=()=>{
        setQuery(Query => CreateQueryObject(Query, {Search}))
    }
    return (
        <div className={styles.Search}>
        <input type="text" placeholder="Search..." value={Search} onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} />
        <button onClick={SearchHandler}><ImSearch/></button>
        </div>
    );
};

export default Search;