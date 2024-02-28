import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styles from './Loading.module.css'
const Loading = () => {
    return (
        <div className={styles.Loader}>
            <RotatingLines width='100px' height="100px" strokeWidth='3' strokeColor='#fe5d42'  />
        </div>
    );
};

export default Loading;