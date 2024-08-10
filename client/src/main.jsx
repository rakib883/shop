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
import ProtectPage from './User/ProtectPage';
import Profile from './User/Profile';
import DashBord from './Page/DashBord';
import PersonalInfo from './User/PersonalInfo';
import Pament from './Page/Pament';
import ProfileWishList from './Page/ProfileWishList';
import PamentSuccess from './Page/Success';
import Cart from './Page/Cart';
import PamentCancel from './Page/Cancel';



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
          path:"pament-success",
          element:<PamentSuccess/>
        },
        {
          path:"pament-cancel",
          element:<PamentCancel/>
        },
         {
          path:"about",
          element:<About/>
         },
         {
           path:"/user",
           element:<ProtectPage/>,
           children:[
            {
              path:"profile",
              element:<Profile/>,
              children:[
                {
                  path:"",
                  element:<DashBord/>
                },
                {
                  path:"personal-info",
                  element:<PersonalInfo/>
                },
                {
                  path:"pament-info",
                  element:<Pament/>,
                },
                {
                  path:"wishlist",
                  element:<ProfileWishList/>
                },
              ]
            }
           ]
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
            path:"/cart",
            element:<Cart/>
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
