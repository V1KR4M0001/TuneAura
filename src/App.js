import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Generate from './pages/Generate';
import MyPlaylists from './pages/MyPlaylists';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [playlists, setPlaylists] = useState([]);

  const addPlaylist = (playlist) => {
    setPlaylists([...playlists, playlist]);
  };

  const deletePlaylist = (id) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== id));
  };

  const renamePlaylist = (id, newName) => {
    setPlaylists(playlists.map(playlist => 
      playlist.id === id ? {...playlist, name: newName} : playlist
    ));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home playlists={playlists} />} />
            <Route path="/generate" element={<Generate addPlaylist={addPlaylist} />} />
            <Route 
              path="/playlists" 
              element={
                <MyPlaylists 
                  playlists={playlists} 
                  onDelete={deletePlaylist} 
                  onRename={renamePlaylist}
                />
              } 
            />
          </Routes>
        </main>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;