import React from 'react';
import { useParams } from 'react-router';
import { ProductsDetails } from '../Context/ProductsContext';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';
import {SiOpenproject} from 'react-icons/si'
import {IoMdPricetag} from 'react-icons/io'
import {FaArrowLeft} from 'react-icons/fa'
import styles from './DetailsPage.module.css'
const DetailsPage = () => {
    const {id}=useParams();
    const Product=ProductsDetails(+id);
    if(!Product) return <Loading/>
    return (
        <div className={styles.Container}>
            <img src={Product.image} alt={Product.title} />
            <div className={styles.Information}>
                <h3 className={styles.Title}>{Product.title}</h3>
                <p className={styles.Description}>{Product.description}</p>
                <p className={styles.Category}><SiOpenproject/> {Product.category}</p>
                <div>
                    <span className={styles.Price}><IoMdPricetag/> {Product.price}$</span>
                    <Link to="/ProductsPage"><FaArrowLeft/> Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;