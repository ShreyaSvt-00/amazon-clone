import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment";


function App() {

const [{},dispatch]=useStateValue();




  // its a listener
  useEffect(() => {
    // will only run once when app component loads(kind of like a dynamic if statement in react)
    // as soon as app loads in firebase attaches this listener
    auth.onAuthStateChanged((authUser) => {

      console.log("user logged in", authUser);
      if (authUser) {
        // it means the user just signed in or was signed in ..keeps you signed in even when
        // u refresh page
         dispatch({
          //  it shoots user in data layer every time they login
           type:'SET_USER',
           user:authUser
         })


      }
      else{
        // the user is logged out
        dispatch({
          
           type:'SET_USER',
           user:null
         }) 

      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
          <Header />
          <Payment/>
          </Route>

          <Route path="/">
            <Header />
            {/* keep it always at the bottom otherwise everytime you route to any page it will get rendered */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
