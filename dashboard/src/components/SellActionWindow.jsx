import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // reuse same css for now

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [productType, setProductType] = useState("CNC");

  const { closeSellWindow, triggerRefresh } = useContext(GeneralContext);
  
  // Toast handlers
  const handleError = (err) => toast.error(err, { position: "bottom-center" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-center" });

  const handleSellClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      handleError("Quantity and Price must be greater than 0");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/sellOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
          product: productType,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        handleSuccess(response.data.message);
        triggerRefresh();
        
        // Delay closing so the user can see the toast
        setTimeout(() => {
            closeBuyWindow();
        }, 1000);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      handleError(errorMsg);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
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
      <div className="container" id="sell-window" style={{ position: "relative", zIndex: 1000 }}>
        
        {/* Red header for Sell */}
        <div style={{ padding: "15px", backgroundColor: "#df514c", color: "white", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
          <h3 style={{ margin: 0 }}>Sell {uid}</h3>
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
                min="1"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                step="0.05"
                min="0"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Value ₹{marginRequired}</span>
          <div>
            <button className="btn btn-red" onClick={handleSellClick}>
              Sell
            </button>
            <Link className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
