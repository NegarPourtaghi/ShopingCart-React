import React from 'react';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { UseCart } from '../Context/CartContext';
import styles from './Layout.module.css'
const Layout = ({children}) => {
    const[state]=UseCart()
    return (
        <div className={styles.Container}>
            <header className={styles.Header}>
                <Link to="/ProductsPage">Shop</Link>
                <Link to="/CheckoutPage">
                    <div>
                    <PiShoppingCartSimpleBold/>
                {
                    state.ItemsCounter>0 && <span>{state.ItemsCounter}</span>

                }
                    </div>
                </Link>

            </header>
                {children}
            <footer className={styles.Footer}>

                    <p>Developed by Negar with ❤️</p>
            </footer>
        </div>
    );
};

export default Layout;