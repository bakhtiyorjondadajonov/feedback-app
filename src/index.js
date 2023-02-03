import { BrowserRouter } from 'react-router-dom';
import './index.css';

import React from 'react'
import ReactDOM  from 'react-dom/client';
import App from './App'
import UserContextProvider from './context/userContext';
import ProductRequestContextProvider from './context/productRequestsContext';

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
<BrowserRouter>
<UserContextProvider>
    <ProductRequestContextProvider>
<App/>
    </ProductRequestContextProvider>
</UserContextProvider>
</BrowserRouter>
)
// ReactDOM.render(<App/>,document.getElementById("root"))
// ReactDOM.render(<App/>,document.getElementById("root"))