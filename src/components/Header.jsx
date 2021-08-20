import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {

  const [{basket,user} , dispatch] = useStateValue();

 const handlesigning=() => {
if(user){
  auth.signOut();
}
 }



  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon_logo"
      />
      </Link>
      

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      
      <div  className="header_nav">
      <Link to={!user && "/login"}>
        <div className="nav"  onClick={handlesigning}>
          <span className="navoption1">Hello, {!user ? 'Guest' : user.email}</span>
          <span className="navoption2">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
       </Link>
    

        <div className="nav">
          <span className="navoption1">Returns</span>
          <span className="navoption2">& Orders</span>
        </div>

        <div className="nav">
          <span className="navoption1">Your</span>
          <span className="navoption2">Prime</span>
        </div>

<Link to="/checkout">
<div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="navoption2 header_basketCount">{basket?.length}</span>
        </div>
</Link>
        
      </div>
    </div>
  );
}

export default Header;
