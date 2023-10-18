import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink>Home</NavLink></li>
              <li><NavLink>Add Product</NavLink></li>
              <li><NavLink>My Cart</NavLink></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-4"><NavLink to="/">Home</NavLink></li>
            <li className="mx-4" tabIndex={0}><NavLink to="addtocart">Add Product</NavLink></li>
            <li className="mx-4"><NavLink to="mycart">My Cart</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/login" className="btn btn-primary">Login</NavLink>
        </div>
      </div>
    );
};

export default Navbar;