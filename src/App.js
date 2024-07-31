import React, { useEffect } from 'react';
import RouterPage from './Navigation/RouterPage';
import ProductProvider from './AuthProvider/AuthProvider';
import './App.css';
import SidebarContextProvider from './SidebarContextProvider/SidebarContextProvider';
import CartContextProvider from './CartContextProvider/CartContextProvider';

function App() {

 
  
  return (
   
    <SidebarContextProvider>
      <CartContextProvider>
    <ProductProvider>
     
     <RouterPage/>
     
    
    </ProductProvider>
    </CartContextProvider>
    </SidebarContextProvider>
    
  )
}

export default App