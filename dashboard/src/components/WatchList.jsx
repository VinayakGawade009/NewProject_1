import { Tooltip, Grow } from '@mui/material';
import { useState, useContext } from "react";
import { watchlist } from '../data/data';
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import GeneralContext from './GeneralContext';
import { DoughnumChart } from './DoughnutChart';

const WatchList = () => {
  // 1. Search State
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Filter logic for the watchlist
  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Keep original chart logic, but map it to the filtered results
  const labels = filteredWatchlist.map((subArray) => subArray["name"]);
  
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search state
          style={{color: "grey"}}
        />
        <span className="counts"> {filteredWatchlist.length} / {watchlist.length}</span>
      </div>

      <ul className="list">
        {filteredWatchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
        {filteredWatchlist.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px", color: "grey" }}>
            No stocks match your search.
          </p>
        )}
      </ul>

      <DoughnumChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock}) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  return (
    <li 
      onMouseEnter={() => setShowWatchListActions(true)}
      onMouseLeave={() => setShowWatchListActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({uid}) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);
  
  return (
    <span className='actions'>
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className='buy' onClick={() => openBuyWindow(uid)}>Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className='sell' onClick={() => openSellWindow(uid)}>Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className='action'><BarChartOutlined className='icon' /></button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className='action'><MoreHoriz className='icon' /></button>
      </Tooltip>
    </span>
  );
}