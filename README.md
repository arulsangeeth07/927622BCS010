# Stock Price Aggregation Web Application

This is a React-based stock price aggregation web application with a simple Express backend.

## Features

- Fetches real-time stock price data from Alpha Vantage API.
- Displays aggregated stock price information including price, volume, change, and more.
- Simple UI to input stock symbols and get stock prices.

## Setup and Run

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Install backend dependencies:

```bash
npm install
```

2. Install frontend dependencies:

```bash
cd client
npm install
cd ..
```

### Running the Application

To run both backend and frontend concurrently:

```bash
npm run dev
```

- Backend server will run on port 5000.
- Frontend React app will run on port 3000 and proxy API requests to backend.

### Build for Production

To build the React app for production and serve it with the backend:

```bash
cd client
npm run build
cd ..
npm start
```

The backend will serve the static React build files.

## Notes

- The backend uses Alpha Vantage's free demo API key. For production use, replace the API key in `server.js` with your own key from https://www.alphavantage.co/support/#api-key.
- The app currently supports fetching stock data for one symbol at a time.

## License

MIT
