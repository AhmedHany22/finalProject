
import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import userProfile from "./components/userProfile/userProfile";
const About = React.lazy(() => import("./components/About/About"));
const Checkout = React.lazy(() => import("./components/Checkout/Checkout"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Homenew = React.lazy(() => import("./components/Homenew/Homenew"));
const ShoppingCart = React.lazy(() =>import("./components/ShoppingCart/ShoppingCart"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));
const ProductDetail = React.lazy(() => import("./components/products/ProductDetail/ProductDetail"));
const ProductList = React.lazy(() => import("./components/products/productList/productList"));
const Order = React.lazy(() => import("./components/Order/Order"));

// const UserProfile = React.lazy(()=> import("./components/userProfile/userProfile"))

const Routes = () => {
  return (
    <Suspense fallback={<p>Loader...</p>}>
    <BrowserRouter>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/shoppingCart/:id?" exact component={ShoppingCart} />
        <Route path="/details/:id" exact component={ProductDetail} />
        <Route path="/shop" exact component={ProductList} />
        <Route path="/order/:id" exact component={Order} />
        {/* <PrivateRoute path="/profile" exact component={userProfile} /> */}
        <Route path="/" exact component={Homenew} />
      </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
export default Routes;
