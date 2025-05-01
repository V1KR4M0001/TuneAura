import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// --- server/index.js --- const express = require('express'); const mongoose = require('mongoose'); const cors = require('cors'); const authRoutes = require('./routes/auth'); const songRoutes = require('./routes/songs'); const moodRoutes = require('./routes/mood'); const playlistRoutes = require('./routes/playlists'); const suggestRoutes = require('./routes/suggestions'); const historyRoutes = require('./routes/history'); const saavnRoutes = require('./routes/saavn');

const app = express(); app.use(cors()); app.use(express.json());

mongoose.connect('mongodb://localhost:27017/spotify_clone');

app.use('/api/auth', authRoutes); app.use('/api/songs', songRoutes); app.use('/api/mood', moodRoutes); app.use('/api/playlists', playlistRoutes); app.use('/api/suggestions', suggestRoutes); app.use('/api/history', historyRoutes); app.use('/api/saavn', saavnRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

// --- server/routes/saavn.js --- const express = require('express'); const axios = require('axios'); const router = express.Router();

// JioSaavn API base URL const BASE_URL = 'https://saavn.dev/api';

// Search for songs router.get('/search', async (req, res) => { try { const { query } = req.query; const response = await axios.get(${BASE_URL}/search/songs?query=${encodeURIComponent(query)}); res.send(response.data); } catch (error) { res.status(500).send({ error: 'Error fetching data from JioSaavn' }); } });

// Get song details router.get('/songs/:id', async (req, res) => { try { const response = await axios.get(${BASE_URL}/songs?id=${req.params.id}); res.send(response.data); } catch (error) { res.status(500).send({ error: 'Error fetching song details' }); } });

// Get lyrics router.get('/lyrics/:id', async (req, res) => { try { const response = await axios.get(${BASE_URL}/lyrics?id=${req.params.id}); res.send(response.data); } catch (error) { res.status(500).send({ error: 'Error fetching lyrics' }); } });

module.exports = router;

reportWebVitals();