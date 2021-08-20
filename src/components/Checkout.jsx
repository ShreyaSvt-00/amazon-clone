import React from 'react';
import { useStateValue } from '../StateProvider';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";



function Checkout() {


    const [{basket, user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="images/yo.jpg" alt="" className="checkout_ad" />
        <div>
            <h3>
                Hey, {user?.email}
            </h3>
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
              {basket.map(item => (

                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}                
                
                
                
                />
              
              ))}
              
              

         





        </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
