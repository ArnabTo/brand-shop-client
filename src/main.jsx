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
import Registration from './components/Registration/Registration.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './components/Private/PrivateRoute.jsx';
import Error from './Error.jsx';
import Apples from './components/BrandProducts/Apple/Apples.jsx';
import Intel from './components/BrandProducts/Intel/Intel.jsx';
import Samsung from './components/BrandProducts/Samsung/Samsung.jsx';
import Ryzen from './components/BrandProducts/Ryzen/Ryzen.jsx';
import Nvidia from './components/BrandProducts/Nvidia/Nvidia.jsx';
import Sony from './components/BrandProducts/Sony/Sony.jsx';
import AddProducts from './components/AddProducts/AddProducts.jsx';
import Update from './components/Update/Update.jsx';
import MyCart from './components/Cart/MyCart.jsx';
import ProductDetail from './components/BrandProducts/ProductDetails.jsx/ProductDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addproducts",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/products/apple",
        element:<Apples></Apples>
      },
      {
        path: "/products/intel",
        element:<Intel></Intel>
      },
      {
        path: "/products/samsung",
        element:<Samsung></Samsung>
      },
      {
        path: "/products/ryzen",
        element:<Ryzen></Ryzen>
      },
      {
        path: "/products/nvidia",
        element:<Nvidia></Nvidia>
      },
      {
        path: "/products/sony",
        element:<Sony></Sony>
      },
      {
        path: "/products/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5003/products/${params.id}`),
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/products/details/:id",
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5003/products/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
