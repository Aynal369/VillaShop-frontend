import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserCog } from "react-icons/fa";
import { useSelector } from "react-redux";
import avatar from "../../../images/user.png";
import useAuth from "../../../hook/useAuth";

const navData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const { users, handleSignOut } = useAuth();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
      <div className="container-fluid p-0 p-sm-2">
        <Link className="navbar-brand" to="/">
          <h4>
            <span className="text-warning">V</span>ille
            <span className="text-warning">S</span>hop
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navData.map((item, index) => {
              const { title, link } = item;
              return (
                <li className="nav-item px-4 fw-semibold" key={index}>
                  <NavLink className="nav-link" aria-current="page" to={link}>
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-sm btn-light rounded-pill mx-1 mx-sm-2 text-muted position-relative"
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {wishlist.wishlistItems.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-light rounded-pill mx-1 mx-sm-2 text-muted position-relative"
            onClick={() => navigate("/shopping-cart")}
          >
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {cart.cartItems.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <div className="mx-1 mx-sm-2">
            {users?.email ? (
              <ul className="list-unstyled m-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={avatar}
                      alt="avatar"
                      width="32"
                      height="32"
                      className="rounded-circle me-1 border border-3"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end mt-4 border-0 shadow text-center bg-light"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="py-3">
                      <Link
                        className="dropdown-item"
                        to="/dashboard/my-account"
                      >
                        <FaUserCog fontSize="small" />
                        <span className="ms-2">My account</span>
                      </Link>
                    </li>
                    <button
                      type="button"
                      className="btn btn-danger px-4"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </ul>
                </li>
              </ul>
            ) : (
              <Link to="/login">
                <img
                  src={avatar}
                  alt="avatar"
                  width="32"
                  height="32"
                  className="rounded-circle me-1 border border-3"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
