import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../axios";
import { React, useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import {db} from "../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();


  const history=useHistory();


  const elements = useElements();
  const stripe = useStripe();

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate a special stripe secret that allows us to charge a customer
    // whenever the basket changes we need a new secret

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currency's subunits
        // for rupees in paise
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  }, [basket]);

  console.log("The secret key is>>>>>>>>>",clientSecret);

  const handlesubmit = async (event) => { 
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      // payment confirmation

    db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created
      })



      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type:'EMPTY_BASKET'
      })

      history.replace('/orders')

    })
  };

  const handlechange = (event) => {
    // Listen for changes in card element as user fills details
    // and display any error which may occur
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          {/* no-empty-pattern */}
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Shinjuku, Tokyo, Japan</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
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
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handlesubmit}>
              <CardElement onChange={handlechange} />
              <div className="payment_price">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total:{value} </h3>
                    </>
                  )}
                  decimalscale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* errors */}

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
