import axios from 'axios';

// This would normally be stored in environment variables
const API_URL = 'http://localhost:5000/api';

/**
 * Generate a playlist based on user's emotion
 * @param {string} emotion - The emotion selected by the user
 * @returns {Promise<Object>} - Returns playlist data with songs and metadata
 */
export const getPlaylistFromEmotion = async (emotion) => {
    try {
        const response = await axios.post(`${API_URL}/generate-playlist`, { emotion });
        return response.data;
    } catch (error) {
        console.error('Error generating playlist:', error);
        throw new Error('Failed to generate playlist. Please try again.');
    }
};

/**
 * Generate a creative name for a playlist based on its content and emotion
 * @param {string} emotion - The emotion of the playlist
 * @param {Array} songs - List of songs in the playlist
 * @returns {Promise<string>} - Returns an AI-generated name
 */
export const generatePlaylistName = async (emotion, songs) => {
    try {
        const response = await axios.post(`${API_URL}/generate-name`, {
            emotion,
            songs: songs.slice(0, 5) // Send only the first few songs to keep request size reasonable
        });
        return response.data.playlistName;
    } catch (error) {
        console.error('Error generating playlist name:', error);
        // Return a fallback name if the API call fails
        return `${emotion} Vibes`;
    }
};