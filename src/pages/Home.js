import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PlaylistCard from '../components/PlaylistCard';
import '../styles/Home.css';

const Home = ({ playlists }) => {
    const featuredPlaylists = [
        {
            id: 'featured1',
            name: 'Energize Your Day',
            description: 'Upbeat tracks to boost your mood and energy',
            imageUrl: 'linear-gradient(135deg, #ff8008 0%, #ffc837 100%)'
        },
        {
            id: 'featured2',
            name: 'Calm Reflections',
            description: 'Peaceful melodies for relaxation and mindfulness',
            imageUrl: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)'
        }
    ];

    // Combine featured playlists with user's recent playlists
    const recentUserPlaylists = playlists.slice(0, 2);
    const displayPlaylists = [...recentUserPlaylists, ...featuredPlaylists.slice(0, 2 - recentUserPlaylists.length)];

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="hero-section">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Music for Every Emotion
                </motion.h1>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Let AI create the perfect playlist based on how you feel
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/generate" className="cta-button">
                        Create Your Playlist
                    </Link>
                </motion.div>
            </section>

            <section className="featured-section">
                <h2>Featured & Recent Playlists</h2>

                <div className="playlists-grid">
                    {displayPlaylists.map((playlist, index) => (
                        <PlaylistCard
                            key={playlist.id}
                            playlist={playlist}
                            onDelete={() => { }}
                            onRename={() => { }}
                        />
                    ))}
                </div>

                {playlists.length > 0 && (
                    <div className="view-all-container">
                        <Link to="/playlists" className="view-all-link">
                            View All Your Playlists →
                        </Link>
                    </div>
                )}
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-container">
                    <motion.div
                        className="step"
                        whileHover={{ y: -5 }}
                    >
                        <div className="step-number">1</div>
                        <h3>Select Your Emotion</h3>
                        <p>Choose from our preset emotions or enter your own mood</p>
                    </motion.div>

                    <motion.div
                        className="step"
                        whileHover={{ y: -5 }}
                    >
                        <div className="step-number">2</div>
                        <h3>AI Creates Your Playlist</h3>
                        <p>Our AI analyzes your emotion to curate the perfect songs</p>
                    </motion.div>

                    <motion.div
                        className="step"
                        whileHover={{ y: -5 }}
                    >
                        <div className="step-number">3</div>
                        <h3>Save & Listen</h3>
                        <p>Save your playlist, rename it, or listen directly on Spotify</p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;