import React from 'react';
import ProductsPage from './Pages/ProductsPage';
import { Routes ,Route, Navigate } from 'react-router-dom';
import DetailsPage from './Pages/DetailsPage';
import CheckoutPage from './Pages/CheckoutPage'
import PageNotFound from './Pages/404'
import ProductsProvider from './Context/ProductsContext';
import CartProvider from './Context/CartContext';
import Layout from './Layout/Layout';
import Success from './Components/Success';
const App = () => {
  return (
    <CartProvider>
    <ProductsProvider>
    <Layout>

     <Routes>        
        <Route index element={<Navigate to="/ProductsPage" replace />}  />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/ProductsPage/:id" element={<DetailsPage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
      </Layout>

     </ProductsProvider>
    </CartProvider>
  );
};

export default App;