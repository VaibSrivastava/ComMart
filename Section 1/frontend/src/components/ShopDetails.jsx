import React, { useState } from "react";
import data1 from "./itemdata1";
import { Link, useParams } from "react-router-dom";
import shopsData from "./dummyData";
const ShopDetails = () => {
  const { index } = useParams();
  const [shopData, setShopData] = useState(shopsData[index]);
  const [laptopList, setLaptopList] = useState(data1);
  const handleAddToCart = () => {};
  const displayLaptopData = () => {
    return shopData.items.map((item) => (
      <div className="col-md-3 mb-4" style={{ height: "1000px" }}>
        <div className="card" style={{width:300, height:515}}>
          <img
            className="mx-4"
            src={item.image}
            alt=""
            style={{ width: 250, height: 300, placeItems: "center" }}
          />
          <div className="card-body" style={{backgroundColor:"#FFCBA4"}}>
            <h4>{item.name}</h4>
            <h3>₹{item.price}/kg</h3>
            <div className="container w-70" >
              Qty:
              <select className="m-2 h-100 bg-success ">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="1kg">1kg</option>
                <option value="5kg">5kg</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
          
          <button
            className="btn btn-success justify-center "
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div style={{backgroundColor:"#7DFDFE"}}>
    <div className="container"  >
        <h3 style={{textAlign:"center", color:""}}>{shopData.name}</h3>
      <div className="row mt-5">{displayLaptopData()}</div>
    </div>
    </div>
  );
};
/*<div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img className="card-img-top" src={la.image} alt="" style={{height:"120px" ,objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{la.name}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  ));
            }*/

export default ShopDetails;
