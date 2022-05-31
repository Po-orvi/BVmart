const express = require("express");
const { 
    newOrder, 
    getSingleOrder, 
    myOrders, 
    updateOrder, 
    deleteOrder, 
    getAllAdminOrders,
    getAllSellerOrders
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizedRoles} = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser,myOrders);

router.route("/admin/orders").get(isAuthenticatedUser, authorizedRoles("admin"), getAllAdminOrders);

router.route("/seller/orders").get(isAuthenticatedUser, authorizedRoles("seller"), getAllSellerOrders);

router
    .route("/seller/order/:id")
    .put(isAuthenticatedUser, authorizedRoles("seller"), updateOrder)
    .delete(isAuthenticatedUser, authorizedRoles("seller"), deleteOrder);

module.exports = router;