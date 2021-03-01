import './App.css';
import React from 'react';
import i16n from  './i18n';
import Routes from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singout } from './store/actions/userActions';
import i18n from './i18n';
const changeLanguage =(ln) =>{
  return()=>{
    i18n.changeLanguage(ln);
    console.log(`language changed to ${ln}`)
  }
}
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin= useSelector(state=> state.userSignin)
  const dispatch= useDispatch()
  const siginoutHandeler=()=>{
    dispatch(singout())
  }

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-sm navbar-light py-3 bg-white">
          <div className="container">
            <Link className="navbar-brand font-weight-bold" to="/">
              <h2>Techno</h2>
            </Link>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="d-flex float-right navbar-expand-sm ">
                <ul className="navbar-nav float-right ">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                      { userSignin?.userInfo? (userSignin?.userInfo?.name?.toUpperCase()):
                      (<i className="fas fa-user-circle"></i>)
                      }
                    </a>
                    <div className="dropdown-menu">
                      {userSignin?.userInfo?(
                        <>
                          <Link to="#"></Link>
                          <a className="dropdown-item" onClick={siginoutHandeler}><Link to="/signin">Sign out</Link></a>
                          <Link className="dropdown-item" to="/profile">Profile</Link>
                        </>
                      ) : (
                        <>
                          <Link className="dropdown-item" to="signin">Sign in</Link>
                          <Link className="dropdown-item" to="/signup">Sign up</Link>
                        </>
                      )}
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                      <i className="fas fa-shopping-cart">
                        {cartItems.length > 0 && (
                          <span className="bg-danger rounded-circle ml-1 badge">{cartItems.length}</span>
                        )}
                      </i>
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/shoppingCart">View cart</Link>
                      <Link className="dropdown-item" to="/checkout">Checkout</Link>
                    </div>
                  </li>
                  {userSignin?.userInfo && userSignin?.userInfo.isAdmin && (

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle icon" to="#admin" id="navbardrop" data-toggle="dropdown">
                        Admin
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                        <Link className="dropdown-item" to="/AdminProducts">Products</Link>
                        <Link className="dropdown-item" to="/orderlist">Orders</Link>
                        <Link className="dropdown-item" to="/userlist">Users</Link>
                      </div>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </div>
        <div>
        <button onClick={changeLanguage("en")} className="btn btn-dark  btn-sm">English</button>
        
        <button onClick={changeLanguage("ar")} className="btn btn-dark  btn-sm">Arabic</button>
        </div>
        


      </nav>

      <Routes />
      <Footer />
      </Router>

    </div>
  );
}

export default App;
