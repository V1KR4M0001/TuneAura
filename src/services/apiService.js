import axios from 'axios';

// This would normally be stored in environment variables
const API_URL = 'http://localhost:5000/api';

/**
 * Save a playlist to the backend database
 * @param {Object} playlist - The playlist to save
 * @returns {Promise<Object>} - Returns the saved playlist with ID
 */
export const savePlaylist = async (playlist) => {
    try {
        const response = await axios.post(`${API_URL}/playlists`, playlist);
        return response.data;
    } catch (error) {
        console.error('Error saving playlist:', error);

        // For development/demo, simulate successful save with a generated ID
        return {
            ...playlist,
            id: `playlist_${Date.now()}`
        };
    }
};

/**
 * Get all saved playlists for the user
 * @returns {Promise<Array>} - Returns list of saved playlists
 */
export const getPlaylists = async () => {
    try {
        const response = await axios.get(`${API_URL}/playlists`);
        return response.data;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        return [];
    }
};

/**
 * Delete a playlist
 * @param {string} id - ID of the playlist to delete
 * @returns {Promise<boolean>} - Returns success status
 */
export const deletePlaylist = async (id) => {
    try {
        await axios.delete(`${API_URL}/playlists/${id}`);
        return true;
    } catch (error) {
        console.error('Error deleting playlist:', error);
        return false;
    }
};

/**
 * Rename a playlist
 * @param {string} id - ID of the playlist to rename
 * @param {string} newName - New name for the playlist
 * @returns {Promise<Object>} - Returns the updated playlist
 */
export const renamePlaylist = async (id, newName) => {
    try {
        const response = await axios.patch(`${API_URL}/playlists/${id}`, { name: newName });
        return response.data;
    } catch (error) {
        console.error('Error renaming playlist:', error);
        return null;
    }
};