import React from 'react';
import { FaListUl } from "react-icons/fa";
import { CreateQueryObject } from '../Helpers/Functions';
import styles from './SideBar.module.css'
import { Categories } from '../Constant/List';

const SideBar = ({setQuery, Query }) => {
    const CategoryHandler=(e)=>{
        const {tagName}=e.target;
        const Category=e.target.innerText.toLowerCase();
        setQuery(Query => CreateQueryObject(Query, {Category}))
        if (tagName !== "Li") return;
    
    }
    return (
        <div className={styles.SideBar}>
                 <div>
                 <FaListUl />
                  <p>Categories</p>
                 </div>
                  <ul onClick={CategoryHandler}>
                     {
                        Categories.map(item => <li key={item.id} className={Query.Category === `${item.type.toLowerCase()}` ? styles.Selected : null}>{item.type}</li>)
                     }
                  </ul>
        </div>
    );
};

export default SideBar;