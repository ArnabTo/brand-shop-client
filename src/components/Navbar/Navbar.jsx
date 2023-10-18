import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext)

  const handleLogOut = () => {
    signOutUser();
  }
  return (
    <div className="navbar max-w-6xl m-auto">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            <li className="mx-4"><NavLink to="/">Home</NavLink></li>
            <li className="mx-4"><NavLink to="addtocart">Add Product</NavLink></li>
            <li className="mx-4"><NavLink to="mycart">My Cart</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl uppercase">TechTrend</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-4"><NavLink to="/">Home</NavLink></li>
          <li className="mx-4" tabIndex={0}><NavLink to="addtocart">Add Product</NavLink></li>
          <li className="mx-4"><NavLink to="mycart">My Cart</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full mx-4">
        {
          user ? <img src={user.photoURL} alt='user image'/> : <img src="https://i.ibb.co/FwKg1YP/User-avatar-svg.png" alt="default user image"/>
        }
        </div>
        {
          user ? <button onClick={handleLogOut} className="btn btn-primary">Log Out</button> : <NavLink to="/login" className="btn btn-primary">Login</NavLink>
        }

      </div>
    </div>
  );
};

export default Navbar;