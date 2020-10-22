import React from "react";

import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123343"
            title="Monika wood sofa"
            price="302.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51dx6RUA%2BBL._SX425_.jpg"
            rating={5}
          />
          <Product
            id="123343"
            title="Monika wood bed-set"
            price="302.99"
            image="https://www.canadianwood.in/wp-content/uploads/2018/03/Application-Furniture.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123343"
            title="Monika wood sofa"
            price="302.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51dx6RUA%2BBL._SX425_.jpg"
            rating={5}
          />
          <Product
            id="123343"
            title="Monika wood sofa"
            price="302.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51dx6RUA%2BBL._SX425_.jpg"
            rating={5}
          />
          <Product
            id="123343"
            title="Monika wood sofa"
            price="302.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51dx6RUA%2BBL._SX425_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123343"
            title="Monika wood sofa"
            price="302.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51dx6RUA%2BBL._SX425_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
