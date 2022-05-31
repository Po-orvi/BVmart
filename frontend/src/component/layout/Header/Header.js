import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/BvLogo.png";

const options = {
  burgerColorHover : "#ff7373",
    logo,
    logoWidth : "10vmax",
    navColor1 : "rgb(235, 235, 235)",
    logoHoverColor : "#ff7373",
    logoHoverSize : "10px",
    link1Text : "Home",
    link2Text : "Products",
    link3Text : "Contact",
    link4Text : "About",
    link1Url : "/",
    link2Url : "/products",
    link3Url : "/contact",
    link4Url : "/about",
    link1Size : "1.5vmax",
    profileIconUrl:"/login",
    nav1justifyContent : "flex-end",
    nav2justifyContent : "flex-end",
    nav3justifyContent : "flex-end",
    nav4justifyContent : "flex-end",
    link1ColorHover : "#ff7373",
    link1Margin : "1.5vmax",
    searchIconSize : "2vmax",
    profileIconSize : "2vmax",
    cartIconSize : "2vmax",
    profileIconColor:"rgb(0,0,0)",
    searchIconColor : "rgba(0,0,0)",
    cartIconColor : "rgba(0,0,0)",
    searchIconColorHover : "#ff7373",
    profileIconColorHover : "#ff7373",
    cartIconColorHover : "#ff7373",
  
}
const Header = () => {
  return ( 
  <ReactNavbar {...options} />
  );
};

export default Header;