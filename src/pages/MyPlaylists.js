import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PlaylistCard from '../components/PlaylistCard';
import '../styles/MyPlaylists.css';

const MyPlaylists = ({ playlists, onDelete, onRename }) => {
    return (
        <motion.div
            className="playlists-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="page-title">My Playlists</h2>
            <p className="page-subtitle">Manage your saved emotion-based playlists</p>

            {playlists.length === 0 ? (
                <div className="empty-playlists">
                    <p>You don't have any saved playlists yet.</p>
                    <Link to="/generate" className="create-playlist-btn">
                        Create Your First Playlist
                    </Link>
                </div>
            ) : (
                <motion.div
                    className="playlists-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {playlists.map((playlist) => (
                        <PlaylistCard
                            key={playlist.id}
                            playlist={playlist}
                            onDelete={onDelete}
                            onRename={onRename}
                            editable={true}
                        />
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default MyPlaylists;