import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import { searchSongs } from '../services/saavnApi';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        
        try {
            const results = await searchSongs(searchQuery);
            setSearchResults(results.data.results || []);
            setShowResults(true);
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        }
    };

    const handleResultClick = () => {
        setShowResults(false);
        setSearchQuery('');
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <div className="logo">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    🎵 TuneAura
                </motion.div>
            </div>

            <div className="search-container">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search songs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>

                {showResults && searchResults.length > 0 && (
                    <div className="search-results">
                        {searchResults.map((song) => (
                            <Link 
                                to={`/song/${song.id}`} 
                                key={song.id}
                                onClick={handleResultClick}
                                className="search-result-item"
                            >
                                <img 
                                    src={song.image?.[0]?.url || ''} 
                                    alt={song.name} 
                                    className="song-thumbnail"
                                />
                                <div className="song-info">
                                    <h4>{song.name}</h4>
                                    <p>{song.primaryArtists || 'Unknown Artist'}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <ul className="nav-links">
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/">Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/generate">Generate</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/playlists">My Playlists</Link>
                </motion.li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;