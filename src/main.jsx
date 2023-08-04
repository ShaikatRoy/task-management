import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/router';

import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
 </Provider>

  
)
