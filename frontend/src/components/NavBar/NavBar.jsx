import "./NavBar.css";
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { IoSearchOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

function NavBar({ setShowLogin }) {
  const { cartItems, getTotalItems } = useContext(StoreContext);
  let count = getTotalItems(cartItems);

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={assets.logo} alt="logo" />
        </div>
      </Link>
      <div className="navbar-menu">
        <ul>
          <Link to="/">home</Link>
          <a href="#explore-menu">menu</a>
          <a href="#app-download">mobile-app</a>
          <a href="#footer">contact us</a>
        </ul>
      </div>
      <div className="navbar-right">
        <IoSearchOutline className="search-icon" />
        <div className="navbar-shopping-icon">
          <Link to="/cart">
            <FaBasketShopping className="shopping-icon" />
          </Link>

          {count > 0 && (
            <div
              style={{
                padding: count > 0 && count < 10 ? " 0.4em 0.6em" : "0.4em",
                right: count ? "-14px" : "-8px",
                top: count ? "-10px" : "-8px",
              }}
              className="dot"
            >
              {count}
            </div>
          )}
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
