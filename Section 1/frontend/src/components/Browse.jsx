import React, { useState } from "react";
import shop from "./shopDummydata";
import { Link } from "react-router-dom";
const Browse = () => {
  const [laptopList, setLaptopList] = useState(shop);

  const displayLaptopData = () => {
    if (laptopList.length === 0)
      return <h1 className="text-center">No Data Found</h1>;

    return laptopList.map((laptop) => (
      <div className="col-md-3 mb-4">
        <div className="card">
          <img src={laptop.image} alt="" style={{width:304, height:200}}/>
          <div className="card-body">
            <h4>{laptop.name}</h4>
            <p>{laptop.rating} avg rating </p>
            <p>{laptop.reviews} reviews</p>
            <h2>₹{laptop.price}</h2>
            <Link to={laptop.Link}>
            <button className="btn btn-primary">Open</button></Link>
          </div>
        </div>
      </div>
    ));
  };

  const filterLaptop = (e) => {
    const value=e.target.value;
    setLaptopList(
      shop.filter((laptop) =>{
        return laptop.name.toLowerCase().includes(value.toLowerCase());
      })
    ); 
   };

  return (
    <div>
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
    </div>
  );
};

export default Browse;