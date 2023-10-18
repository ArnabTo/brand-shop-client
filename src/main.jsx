import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import AddtoCart from './components/AddtoCart/AddtoCart.jsx';
import Registration from './components/Registration/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addtocart",
        element: <AddtoCart></AddtoCart>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element: <Registration></Registration>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
