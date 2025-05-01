import axios from 'axios';

// This would normally be stored in environment variables
const API_URL = 'http://localhost:5000/api';

/**
 * Get streaming links for songs in a playlist
 * @param {Array} songs - List of song titles and artists
 * @returns {Promise<Array>} - Returns songs with Spotify links
 */
export const getStreamingLinks = async (songs) => {
    try {
        const response = await axios.post(`${API_URL}/spotify/get-links`, { songs });
        return response.data.songsWithLinks;
    } catch (error) {
        console.error('Error getting streaming links:', error);

        // Return mock data with placeholder links for development/demo
        return songs.map(song => ({
            ...song,
            link: 'https://open.spotify.com',
            albumArt: '/api/placeholder/300/300'
        }));
    }
};

/**
 * Save a playlist to the user's Spotify account
 * @param {Object} playlist - The playlist to save
 * @returns {Promise<Object>} - Returns the saved playlist with Spotify URL
 */
export const saveToSpotify = async (playlist) => {
    try {
        const response = await axios.post(`${API_URL}/spotify/save-playlist`, { playlist });
        return response.data;
    } catch (error) {
        console.error('Error saving to Spotify:', error);
        throw new Error('Failed to save playlist to Spotify');
    }
};