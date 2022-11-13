import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full mx-10 my-10">
      <div>
        <p className="text-3xl font-bold cursor-pointer ">Logo </p>
      </div>
      <ul className="flex items-center justify-between gap-6">
        <li className="ct-animation">
          <Link to="/">Home Page</Link>
        </li>
        <li className="ct-animation">
          <Link to="/products">Products</Link>
        </li>
        <li className="ct-animation">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
