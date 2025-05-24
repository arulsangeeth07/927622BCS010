import React from 'react';

function StockPrice({ data }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
      <h2>{data.symbol}</h2>
      <p>Price: ${parseFloat(data.price).toFixed(2)}</p>
      <p>Volume: {data.volume}</p>
      <p>Latest Trading Day: {data.latestTradingDay}</p>
      <p>Previous Close: ${parseFloat(data.previousClose).toFixed(2)}</p>
      <p>Change: {parseFloat(data.change).toFixed(2)}</p>
      <p>Change Percent: {data.changePercent}</p>
    </div>
  );
}

export default StockPrice;
