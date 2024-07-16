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
          path:"product/:id",
          element:<SingleProduct/>
         },
          {
              path:"catagories/:id",
              element:<Shop/>
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
     <RouterProvider router={router} />
  </React.StrictMode>,
)
