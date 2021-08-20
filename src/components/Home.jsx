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
            title="Shoto Todoroki"
            image="./images/shoto.jpg"
            price={99999}
            rating={5}
          />
          <Product
            id="472642743"
            title="Gojo Satoru(Dark)"
            image="./images/satoru.jpg"
            price={9999}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="545628374"
            title="Levi Ackerman"
            image="./images/levi.jpg"
            price={999}
            rating={4}
          />

          <Product
            id="763914471"
            title="Katsuki Bakugou"
            image="./images/bakugou.jpg"
            price={999}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="742364723"
            title="Itachi Uchiha"
            image="./images/itachi.jpg"
            price={999}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
