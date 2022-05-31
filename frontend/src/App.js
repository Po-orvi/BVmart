import "./App.css";
import {useEffect,useState} from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router,Route , Switch} from "react-router-dom";
import React from "react";
import Webfont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";  
import Products from "./component/Product/Products.js"; 
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import {loadUser} from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import axios from "axios";
import ProtectedRoute from "./component/Route/ProtectedUser";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Orders/MyOrders";
import OrderDetails from "./component/Orders/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import OrderList from "./component/Admin/OrderList";
import UserList from "./component/Admin/UserList.js";
import SellerDashboard from "./component/Seller/SellerDashboard";
import NewProduct from "./component/Seller/NewProduct";
import SellerProductList from "./component/Seller/SellerProductList";
import UpdateProduct from "./component/Seller/UpdateProduct";
import SellerOrderList from "./component/Seller/SellerOrderList";
import ProcessOrder from "./component/Seller/ProcessOrder.js";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact";

function App() {

  const {isAuthenticated,user} =useSelector(state=>state.user);

  const [stripeApiKey,setStripeApiKey] = useState("");

  async function getStripeApiKey(){
  const { data } = await axios.get("/api/v1/stripeapikey");
  setStripeApiKey(data.stripeApiKey);
}

    useEffect(() => {
    Webfont.load({
      google:{
          families:["Roboto","Droid Sans","Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  },[]);

  return (
    <Router>
    <Header />

      <Route exact path="/" component = {Home} />
      <Route exact path="/about" component = {About} />
      <Route exact path="/contact" component = {Contact} />
      <Route exact path="/product/:id" component = {ProductDetails} />
      <Route exact path="/products" component = {Products} />
      <Route path="/products/:keyword" component = {Products} />
      <Route exact path="/search" component = {Search} />
      <Route exact path="/login" component = {LoginSignUp}/>
      
      {isAuthenticated && <UserOptions user={user}/>}

      <ProtectedRoute exact path="/account" component = {Profile} />
      <ProtectedRoute exact path="/me/update" component = {UpdateProfile} />
      <ProtectedRoute exact path="/password/update" component = {UpdatePassword} />

      <Route exact path="/password/forgot" component = {ForgotPassword} />
      <Route exact path="/password/reset/:token" component = {ResetPassword} />
     

      <Route exact path="/cart" component = {Cart}/>
      <ProtectedRoute exact path="/shipping" component = {Shipping} />
      

      {stripeApiKey && 
        <Elements stripe={loadStripe(stripeApiKey)}>
      <ProtectedRoute exact path="/process/payment" component = {Payment} />
      </Elements>
      }

      <ProtectedRoute exact path="/success" component = {OrderSuccess} />
      <ProtectedRoute exact path="/orders" component = {MyOrders} />
      
      <Switch>
      <ProtectedRoute exact path="/order/confirm" component = {ConfirmOrder} />
      <ProtectedRoute exact path="/order/:id" component = {OrderDetails} />
      </Switch>

      <ProtectedRoute 
      isAdmin={true}
      exact 
      path="/admin/dashboard" 
      component = {Dashboard} />

      <ProtectedRoute 
      isSeller={true}
      exact 
      path="/seller/dashboard" 
      component = {SellerDashboard} />

      <ProtectedRoute 
      exact 
      path="/seller/product" 
      isSeller={true}
      component = {NewProduct} /> 

      <ProtectedRoute 
      exact 
      path="/seller/products" 
      isSeller={true}
      component = {SellerProductList} /> 

      <ProtectedRoute 
      exact 
      path="/seller/product/:id" 
      isSeller={true}
      component = {UpdateProduct} />

    <ProtectedRoute 
      isSeller={true}
      exact 
      path="/seller/orders" 
      component = {SellerOrderList} />

      <ProtectedRoute 
      isSeller={true}
      exact 
      path="/seller/order/:id" 
      component = {ProcessOrder} />  

      <ProtectedRoute 
      isAdmin={true}
      exact 
      path="/admin/products" 
      component = {ProductList} /> 

      <ProtectedRoute 
      isAdmin={true}
      exact 
      path="/admin/orders" 
      component = {OrderList} /> 

      <ProtectedRoute 
      isAdmin={true}
      exact 
      path="/admin/users" 
      component = {UserList} /> 

      <ProtectedRoute 
      isAdmin={true}
      exact 
      path="/admin/user/:id" 
      component = {UpdateUser} /> 

      <ProtectedRoute 
      isAdmin={true}
      exact 
      path="/admin/reviews" 
      component = {ProductReviews} /> 

    <Footer />  
  </Router>
  );
}

export default App;
