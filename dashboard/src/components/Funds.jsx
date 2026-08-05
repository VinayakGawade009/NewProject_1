import { Link } from "react-router-dom";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Funds = () => {
  const { user } = useContext(GeneralContext);

  const balance = user?.balance !== undefined ? user.balance : 0;
  const formattedBalance = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(balance);

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green" onClick={() => alert("Payment gateway integration coming in V2")}>Add funds</Link>
        <Link className="btn btn-blue" onClick={() => alert("Withdrawal processing coming in V2")}>Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{formattedBalance}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹0.00</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{formattedBalance}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{formattedBalance}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>₹0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue" onClick={() => alert("Commodity trading coming in V2")}>Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;