const functions = require("firebase-functions");

const express=require("express");
const cors=require("cors");


const stripe = require("stripe")('sk_test_51JQTFOSDA6m8fJFqFprl17shLikOxaVuveiraxy1Zqi14F89KHDEAEttSsS9atJ4kwonZEgzHRUYkXOYPo9dBsAe00DPtNJhGW');


// API

// App config
const app=express();

// Middleware
app.use(cors({ origin :true }));
app.use(express.json());

// API routes
app.get("/",(request,response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request,response) => {
    const total=request.query.total;

    console.log("Payment req received", total)

    const paymentIntent= await stripe.paymentIntents.create({
        amount:total, //subunits of the currency
        currency:"inr",
        payment_method_types: ['card'],
    });
    console.log("Theeee payment intentttt is >>>>",paymentIntent);

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

})

// Listen Command
exports.api= functions.https.onRequest(app);

// Example Endpoint(local)
// http://localhost:5001/fir-394fc/us-central1/api