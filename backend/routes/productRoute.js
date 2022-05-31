const express = require("express");
const { 
    getAllProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getProductDetails, 
    createProductReview,
    getProductReviews,
    deleteReview,
    getAdminProducts,
    getSellerProducts
} = require("../controllers/productController");
const {isAuthenticatedUser, authorizedRoles} = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/admin/products").get(isAuthenticatedUser, authorizedRoles("admin"),getAdminProducts);

router.route("/seller/products").get(isAuthenticatedUser, authorizedRoles("seller"),getSellerProducts);

router.route("/seller/product/new").post( isAuthenticatedUser, authorizedRoles("seller"), createProduct);

router
    .route("/seller/admin/product/:id")
    .put( isAuthenticatedUser, authorizedRoles("seller"), updateProduct)
    .delete( isAuthenticatedUser, authorizedRoles("seller","admin"), deleteProduct);

//router.route("/admin/product/:id").delete( isAuthenticatedUser, authorizedRoles("admin"),deleteProduct);
    
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);

module.exports = router;

