import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {


  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light py-3 bg-white">
        <div className="container">
          <a className="navbar-brand font-weight-bold" href="/">
            <h2>Techno</h2>
          </a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/contact">Contact</a>
              </li>
            </ul>
            <div className="d-flex float-right navbar-expand-sm ">
              <ul className="navbar-nav float-right ">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                    <i className="fas fa-user-circle"></i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/signin">Sign in</a>
                    <a className="dropdown-item" href="/signup">Sign up</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/shoppingCart">View cart</a>
                    <a className="dropdown-item" href="/checkout">Checkout</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
