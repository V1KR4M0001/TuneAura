import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
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
                    🎵 Emotionify
                </motion.div>
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