import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import GeneralContext from "./GeneralContext";

const Orders = () => {

  const { orders } = useContext(GeneralContext);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">Get started</Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({orders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Time</th> {/* NEW COLUMN */}
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Product</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {/* FIX: Spread into a new array and reverse it to show latest first */}
                {[...orders].reverse().map((stock, index) => {
                  
                  // Safely format the date if it exists in your DB
                  const orderTime = stock.createdAt 
                    ? new Date(stock.createdAt).toLocaleString('en-IN', {
                        day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
                      }) 
                    : "-";

                  return (
                    <tr key={index}>
                      <td>{orderTime}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price?.toFixed(2)}</td>
                      <td>{stock.product}</td>
                      <td className={stock.mode === "BUY" ? "buy" : "sell"}>{stock.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
