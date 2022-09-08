import React from "react";
import { NavLink } from "react-router-dom";

function Header({ searchItems, searchInput, setShow, size, setCurrentUser }) {
  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser(null));
  };

  return (
    <header className="headerbackground">
      <nav>
        <div className="navbar">
          <NavLink exact className="button" to="/">
            WeList
          </NavLink>
          {/* <NavLink exact className="button" to="/listings">
            Shop
          </NavLink> */}
          <NavLink exact className="button" to="/listings/new">
            Sell
          </NavLink>
          <NavLink exact className="button" to="/my_items">
            My Listed Items
          </NavLink>
          <NavLink exact className="button" to="/cart">
            Cart: { size }
            <span>
              <i class="fas-fa-cart-plus"></i>
            </span>
          </NavLink>
          <NavLink exact className="button" onClick={logout} to="/">
            Logout
          </NavLink>
          {/* <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i class="fas-fa-cart-plus"></i>
          </span>
          <span>{size}</span>
          </div>*/}
        </div>
      </nav>
    </header>
  );
}

export default Header;
