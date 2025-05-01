import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import '../styles/PlaylistCard.css';

const PlaylistCard = ({ playlist, onDelete, onRename, editable = false }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(playlist.name);

    const handleRename = () => {
        if (newName.trim() && newName !== playlist.name) {
            onRename(playlist.id, newName);
            toast.success(`Playlist renamed to "${newName}"`);
        }
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(playlist.id);
        toast.info(`Playlist "${playlist.name}" deleted`);
    };

    const getRandomGradient = () => {
        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
            'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
            'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
            'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)'
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    const cardStyle = {
        backgroundImage: playlist.imageUrl || getRandomGradient()
    };

    return (
        <motion.div
            className="playlist-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="playlist-image" style={cardStyle}></div>
            <div className="playlist-info">
                {isEditing ? (
                    <div className="rename-form">
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            autoFocus
                        />
                        <div className="rename-actions">
                            <button onClick={handleRename}>Save</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <h3>{playlist.name}</h3>
                )}

                <p>{playlist.description}</p>

                <div className="playlist-actions">
                    <a
                        href={playlist.spotifyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="spotify-link"
                    >
                        Open in Spotify
                    </a>

                    {editable && (
                        <div className="management-actions">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="edit-button"
                            >
                                Rename
                            </button>
                            <button
                                onClick={handleDelete}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default PlaylistCard;