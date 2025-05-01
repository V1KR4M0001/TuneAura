import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SongList.css';

const SongList = ({ songs, loading }) => {
    if (loading) {
        return (
            <div className="song-list-loading">
                <div className="loading-spinner"></div>
                <p>Curating your perfect playlist...</p>
            </div>
        );
    }

    if (!songs || songs.length === 0) {
        return <p className="no-songs">No songs to display. Select an emotion to generate a playlist.</p>;
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="song-list"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {songs.map((song, index) => (
                <motion.div
                    key={index}
                    className="song-card"
                    variants={item}
                >
                    <div className="song-image">
                        <img src={song.albumArt || '/api/placeholder/100/100'} alt={song.title} />
                    </div>
                    <div className="song-details">
                        <h4>{song.title}</h4>
                        <p>{song.artist}</p>
                    </div>
                    <div className="song-actions">
                        <a
                            href={song.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="listen-button"
                        >
                            Listen
                        </a>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SongList;