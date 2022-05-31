import React ,{useEffect} from "react";
import Sidebar from "./Sidebar.js";
import "../Admin/dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSellerProducts } from "../../actions/productAction";
import { getAllSellerOrders } from "../../actions/orderAction.js";

const SellerDashboard = () => {
    
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  useEffect(() => {
    dispatch(getSellerProducts());
    dispatch(getAllSellerOrders());
  }, [dispatch]);

  
  let totalAmount = 0;

  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });
  

  return (
    <div className="dashboard">
    <Sidebar />

    <div className="dashboardContainer">
    <Typography component="h1">Dashboard</Typography>

      <div className="dashboardSummary">
        <div>
          <p>
            Total Amount <br /> ₹{totalAmount}
          </p>
        </div>
        <div className="dashboardSummaryBox2">
          <Link to="/seller/products">
            <p>Product</p>
            <p>{products && products.length}</p>
          </Link>
          <Link to="/seller/orders">
            <p>Orders</p>
            <p>{orders && orders.length}</p>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SellerDashboard;