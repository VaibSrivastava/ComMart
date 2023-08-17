import React, { useState } from "react";
import Card from "./Card1";
import Card2 from "./Card2";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import shop from "./shopDummydata";
import { Link } from "react-router-dom";
import shopsData from "./dummyData";

const Home = () => {
  const [laptopList, setLaptopList] = useState(shopsData);

  const displayLaptopData = () => {
    if (laptopList.length === 0)
      return <h1 className="text-center">No Data Found</h1>;

    return laptopList.map((laptop, index) => (
      <div className="col-md-3 mb-4">
        <div className="card">
          <img src={laptop.image} alt="" style={{ width: 304, height: 200 }} />
          <div className="card-body">
            <h4>{laptop.name}</h4>
            <p>Avg rating: {laptop.rating} </p>
            
            
            <Link to={'/shop/'+index}>
              <button className="btn btn-primary">Open</button>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const filterLaptop = (e) => {
    const value = e.target.value;
    setLaptopList(
      shop.filter((laptop) => {
        return laptop.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  return (
    <div style={{backgroundImage:"https://koreamin.files.wordpress.com/2015/02/store-pic.png"}}>
      <header className="bg-body-tertiary">
        <div className="container py-5">
          <p className="display-2 text-center fw-bold">Shop List</p>
          <input
            type="text"
            className="form-control w-75 m-auto"
            onChange={filterLaptop}
          />
        </div>
      </header>
      <div className="container">
        <div className="row mt-5">{displayLaptopData()}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <div>
        <Carousel />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <h1>
          <shopDummydata />
        </h1>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
