import React, { useState } from 'react';
import data3 from './itemdata3';
const Card3 = () => {
    const [laptopList, setLaptopList] = useState(data3);
  const displayLaptopData = () => {
        return laptopList.map((laptop) => (
          <div className="col-md-3 mb-4" style={{height:"1000px"}}>
            <div className="card">
              <img className='mx-4' src={laptop.image} alt="" style={{width:250, height:300, placeItems: "center"}}/>
              <div className="card-body">
                <h4>{laptop.name}</h4>
                <div className="container w-70">Qty:
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
              <option value="1kg">1kg</option>
              <option value="5kg">5kg</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
              </div>
            </div>
          </div>
        ));
      }
      return (
       
          <div className="container">
            <div className="row mt-5">{displayLaptopData()}</div>
          </div>
        
      );
      };

export default Card3;