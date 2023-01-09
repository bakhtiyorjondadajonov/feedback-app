import { BrowserRouter } from 'react-router-dom';
import './index.css';

import React from 'react'
import ReactDOM  from 'react-dom/client';
import App from './App'

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
<BrowserRouter>
<App/>
</BrowserRouter>
)
// ReactDOM.render(<App/>,document.getElementById("root"))
// ReactDOM.render(<App/>,document.getElementById("root"))