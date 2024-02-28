import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100%"}}>
            <Link style={{color:"#fff", backgroundColor:"#4dd600", width:"fit-content", margin:"auto", padding:"10px", borderRadius:"5px"}} to="/ProductsPage">Checkedout Successfully</Link>
        </div>
    );
};

export default Success;