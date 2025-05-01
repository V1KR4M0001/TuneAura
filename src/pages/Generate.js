import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import EmotionSelector from '../components/EmotionSelector';
import SongList from '../components/SongList';
import { getPlaylistFromEmotion, generatePlaylistName } from '../services/openaiService';
import { getStreamingLinks } from '../services/spotifyService';
import { savePlaylist } from '../services/apiService';
import '../styles/Generate.css';

const Generate = ({ addPlaylist }) => {
    const [emotion, setEmotion] = useState('');
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const [customName, setCustomName] = useState('');
    const [showSaveForm, setShowSaveForm] = useState(false);

    const handleEmotionSelect = async (selectedEmotion) => {
        try {
            setEmotion(selectedEmotion);
            setLoading(true);
            setSongs([]);
            setShowSaveForm(false);

            // Get playlist recommendations from OpenAI
            const playlistData = await getPlaylistFromEmotion(selectedEmotion);

            // Get streaming links for the songs
            const songsWithLinks = await getStreamingLinks(playlistData.songs);

            // Generate a playlist name
            const generatedName = await generatePlaylistName(selectedEmotion, songsWithLinks);

            setSongs(songsWithLinks);
            setPlaylistName(generatedName);
            setCustomName(generatedName);
            setShowSaveForm(true);

            toast.success(`Created a "${selectedEmotion}" playlist for you!`);
        } catch (error) {
            toast.error(error.message || 'Failed to generate playlist');
            setSongs([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSavePlaylist = async () => {
        try {
            if (!customName.trim()) {
                toast.error('Please enter a playlist name');
                return;
            }

            const playlist = {
                name: customName,
                description: `A playlist based on ${emotion} vibes`,
                songs: songs,
                emotion: emotion,
                createdAt: new Date().toISOString()
            };

            // Save to backend/database
            const savedPlaylist = await savePlaylist(playlist);

            // Add to app state
            addPlaylist(savedPlaylist);

            toast.success('Playlist saved successfully!');
            setShowSaveForm(false);
        } catch (error) {
            toast.error('Failed to save playlist');
        }
    };

    return (
        <motion.div
            className="generate-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="page-title">Pick Your Mood 🎧</h2>
            <p className="page-subtitle">Select an emotion to generate a customized playlist</p>

            <EmotionSelector onSelect={handleEmotionSelect} />

            {loading && (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Creating your personalized playlist...</p>
                </div>
            )}

            {songs.length > 0 && (
                <motion.div
                    className="results-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="playlist-title">{playlistName}</h3>
                    <SongList songs={songs} loading={loading} />

                    {showSaveForm && (
                        <motion.div
                            className="save-form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <input
                                type="text"
                                value={customName}
                                onChange={(e) => setCustomName(e.target.value)}
                                placeholder="Name your playlist"
                                className="playlist-name-input"
                            />
                            <button
                                onClick={handleSavePlaylist}
                                className="save-button"
                                disabled={!customName.trim()}
                            >
                                Save Playlist
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
};

export default Generate;