import React, { useState } from 'react';
import StockPrice from './components/StockPrice';

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState('');

  const fetchStockPrice = async () => {
    setError('');
    setStockData(null);
    if (!symbol) {
      setError('Please enter a stock symbol');
      return;
    }
    try {
      const response = await fetch('/api/stock/' + symbol);
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Failed to fetch stock data');
        return;
      }
      const data = await response.json();
      setStockData(data);
    } catch (err) {
      setError('Failed to fetch stock data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStockPrice();
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Stock Price Aggregation</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter stock symbol (e.g. AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          style={{ padding: '0.5rem', fontSize: '1rem', width: '70%' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem', fontSize: '1rem' }}>
          Get Price
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {stockData && <StockPrice data={stockData} />}
    </div>
  );
}

export default App;
