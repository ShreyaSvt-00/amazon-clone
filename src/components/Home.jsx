import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="primeImage"
        />

        <div className="home_row">
          <Product
            id="347284728"
            title="Panoscan MK-3 Digital 360 Degree Panoramic Camera"
            image="./images/fifth.png"
            price={40000}
            rating={4}
          />
          <Product
            id="472642743"
            title="Alba by Seiko Watch Corporation Autumn-Winter 20 Analog Black Dial Men's Watch-AM3792X1"
            image="./images/first.png"
            price={8850}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="545628374"
            title="Apple MacBook Pro 2020 (Mac, 8GB RAM, 256GB SSD, Apple M1 8 Core, Space Grey, 13 inch)"
            image="./images/sixth.png"
            price={128999}
            rating={4}
          />

          <Product
            id="763914471"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Blue)"
            image="./images/second.png"
            price={3499}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="742364723"
            title="Samsung KU6000 LED-backlit LCD Ultra-high-definition television 4K resolution Smart TV"
            image="./images/tv.png"
            price={65990}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
