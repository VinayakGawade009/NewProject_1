import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const { user, holdings } = useContext(GeneralContext);

  // Fallback defaults
  const username = user?.username || "User";
  const balance = user?.balance !== undefined ? user.balance : 0;

  // Calculate Holdings totals dynamically
  let totalInvestment = 0;
  let currentValue = 0;

  if (holdings && holdings.length > 0) {
    holdings.forEach((stock) => {
      totalInvestment += stock.avg * stock.qty;
      currentValue += stock.price * stock.qty;
    });
  }

  const totalPL = currentValue - totalInvestment;
  const pnlPercent = totalInvestment === 0 ? 0 : (totalPL / totalInvestment) * 100;

  // Currency Formatter
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{formatCurrency(balance)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>₹0.00</span>{" "}
            </p>
            <p>
              Opening balance <span>{formatCurrency(balance)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings ? holdings.length : 0})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totalPL >= 0 ? "profit" : "loss"}>
              {formatCurrency(totalPL)} <small>{totalPL > 0 ? "+" : ""}{pnlPercent.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatCurrency(currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatCurrency(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;