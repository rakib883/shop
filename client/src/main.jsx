import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import NotFound from './Page/NotFound';
import Home from './Page/Home';
import Shop from './Page/Shop';
import SingleProduct from './Page/SingleProduct';
import About from './Page/About';
import Contact from './Page/Contact';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Wishlist from './Page/wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
          {
            path: "/",
            element:<Home/>,
          },
          {
            path:"Shop",
            element:<Shop/>
         },
         {
          path:"about",
          element:<About/>
         },
         {
          path:"contact",
          element:<Contact/>
         },
         {
          path:"product/:id",
          element:<SingleProduct/>
         },
          {
              path:"catagories/:id",
              element:<Shop/>
          },
          {
            path:"/wishlist",
            element:<Wishlist/>
          },
          {
            path:"*",
            element:<NotFound/>
          }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={Store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>,
)
