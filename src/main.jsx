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
        element: <Apples></Apples>
      },
      {
        path: "/products/intel",
        element: <Intel></Intel>
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
