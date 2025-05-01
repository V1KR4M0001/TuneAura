import axios from "axios";

const API_BASE = "http://localhost:5000/api/saavn";

export const searchSongs = async (query) => {
    try {
        const response = await axios.get(`${API_BASE}/search`, {
            params: { query },
        });
        return response.data;
    } catch (error) {
        console.error("Error searching songs:", error);
        throw error;
    }
};

export const getSongDetails = async (id) => {
    try {
        const response = await axios.get(`${API_BASE}/songs/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching song details:", error);
        throw error;
    }
};

export const getLyrics = async (id) => {
    try {
        const response = await axios.get(`${API_BASE}/lyrics/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        throw error;
    }
};
