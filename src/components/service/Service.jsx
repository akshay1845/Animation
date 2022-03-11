import React, { useState } from "react";
import "./service.scss";

function Service() {

  const [data, setData] = useState(0)

  const [data2, setData2] = useState(30)

  return (
    <div className=" main container d-flex justify-content-center">
      <div className="container2 ">
        <div className="top">
          <h1 className="mt-5">Get awesome features,without extra charges</h1>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ducimus
            modi deserunt repudiandae similique! Laudantium eum ipsa mollitia,
            rerum eligendi soluta facere odit provident incidunt deleniti,
            voluptates magnam non! Reprehenderit.
          </p>
        </div>

        <div className="bottom">
          <div className="btn btn-light mt-5 me-3" onClick={() => {
            setData(0);
            setData2(30)
          }}> Monthly</div>
          <div className="btn  btn-light mt-5" onClick={() => {
            setData(20);
            setData2(100)
          }}> Anually</div>
          <div className="cards row">
            <div className="card">
              <div className="content">
                <h1>${data}<sub>/month</sub></h1>
                <h2>Business Class</h2>
                <span>for small length of office</span>
              </div>
              <p>
                Drag and drop builder
                1000,'s Templates
                Blog Support Tools
                Ecommerce store</p>
              <div className="try">start free trial</div>
            </div>
            <div className="card ">
              <div className="content">
                <h1>${data2}<sub>/month</sub></h1>
                <h2>Business Class</h2>
                <span>for small length of office</span>
              </div>
              <p>
                Drag and drop builder
                1000,'s Templates
                Blog Support Tools
                Ecommerce store</p>

              <div className="try text-center">
                start free trial
              </div>

            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default Service;
