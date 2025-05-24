const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint to fetch stock prices (proxy to public API)
const axios = require('axios');

app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  try {
    // Using a free stock price API: Alpha Vantage (demo key)
    const apiKey = 'demo'; // Replace with your own API key for production
    const url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + symbol + "&apikey=" + apiKey;
    const response = await axios.get(url);
    const data = response.data['Global Quote'];
    if (!data) {
      return res.status(404).json({ error: 'Stock symbol not found' });
    }
    res.json({
      symbol: data['01. symbol'],
      price: data['05. price'],
      volume: data['06. volume'],
      latestTradingDay: data['07. latest trading day'],
      previousClose: data['08. previous close'],
      change: data['09. change'],
      changePercent: data['10. change percent']
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
