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
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './components/Private/PrivateRoute.jsx';
import Error from './Error.jsx';
import Apples from './components/BrandProducts/Apple/Apples.jsx';
import Intel from './components/BrandProducts/Intel/Intel.jsx';
import Samsung from './components/BrandProducts/Samsung/Samsung.jsx';
import Ryzen from './components/BrandProducts/Ryzen/Ryzen.jsx';
import Nvidia from './components/BrandProducts/Nvidia/Nvidia.jsx';
import Sony from './components/BrandProducts/Sony/Sony.jsx';

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
        path: "/addtocart",
        element: <PrivateRoute><AddtoCart></AddtoCart></PrivateRoute>
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
        element: <PrivateRoute><Apples></Apples></PrivateRoute>
      },
      {
        path: "/products/intel",
        element: <PrivateRoute><Intel></Intel></PrivateRoute>
      },
      {
        path: "/products/samsung",
        element: <PrivateRoute><Samsung></Samsung></PrivateRoute>
      },
      {
        path: "/products/ryzen",
        element: <PrivateRoute><Ryzen></Ryzen></PrivateRoute>
      },
      {
        path: "/products/nvidia",
        element: <PrivateRoute><Nvidia></Nvidia></PrivateRoute>
      },
      {
        path: "/products/sony",
        element: <PrivateRoute><Sony></Sony></PrivateRoute>
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
