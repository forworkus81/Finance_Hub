// filepath: finance-hub-backend/server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const RAPIDAPI_KEY = '0dbe0a69c9msh8e5a636621ec677p1c6021jsna68bc5a617c9';
const RAPIDAPI_HOST = 'cryptocurrency-news2.p.rapidapi.com';

// CoinDesk
app.get('/api/coindesk', async (req, res) => {
  try {
    const response = await fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk', {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    });
    const text = await response.text();
    console.log(text); // <-- Add this line
    res.json(JSON.parse(text));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Cointelegraph
app.get('/api/cointelegraph', async (req, res) => {
  try {
    const response = await fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph', {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Bitcoinist
app.get('/api/bitcoinist', async (req, res) => {
  try {
    const response = await fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/bitcoinist', {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    });
    const data = await response.json();
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Decrypt
app.get('/api/decrypt', async (req, res) => {
  try {
    const response = await fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt', {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// BSC News
app.get('/api/bsc', async (req, res) => {
  try {
    const response = await fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/bsc', {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// The Guardian
app.get('/api/theguardian', async (req, res) => {
  try {
    const response = await fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/theguardian', {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// CryptoDaily
app.get('/api/cryptodaily', async (req, res) => {
  try {
    const response = await fetch('https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily', {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

