import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1); // no of stock
  const [stockPrice, setStockPrice] = useState(0.0); // price of stock
  const [productType, setProductType] = useState("CNC"); // Default to Long-term

  const { closeBuyWindow, triggerRefresh } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      alert("Quantity and Price must be greater than 0");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
          product: productType,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        alert(response.data.message);
        triggerRefresh();
        closeBuyWindow();
      }
    } catch (error) {
      // Safely extract backend error message
      const errorMsg = error.response?.data?.message || "Something went wrong";
      alert(errorMsg);
    }

  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const marginRequired = (Number(stockQuantity) * Number(stockPrice)).toFixed(2);

  return (
    <div 
      className="modal-overlay" 
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
        backgroundColor: "rgba(0,0,0,0.5)", zIndex: 999,
        display: "flex", justifyContent: "left", alignItems: "center"
      }}
    >
      <div className="container" id="buy-window" style={{ position: "relative", zIndex: 1000 }}>
        
        <div style={{ padding: "15px", backgroundColor: "#387ed1", color: "white", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
          <h3 style={{ margin: 0 }}>Buy {uid}</h3>
        </div>

        <div className="regular-order" style={{ padding: "15px" }}>
          
          <div style={{ marginBottom: "15px", display: "flex", gap: "20px" }}>
            <label>
              <input type="radio" value="MIS" checked={productType === "MIS"} onChange={(e) => setProductType(e.target.value)} />
              MIS (Intraday)
            </label>
            <label>
              <input type="radio" value="CNC" checked={productType === "CNC"} onChange={(e) => setProductType(e.target.value)} />
              CNC (Long-term)
            </label>
          </div>

          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                min="1"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                min="0"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹{marginRequired}</span>
          <div>
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </button>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
