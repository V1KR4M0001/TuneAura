import { EmotionSelector } from "../components/EmotionSelector";
import { getPlaylistFromEmotion } from "../services/openaiService";
import { SongList } from "../components/SongList";
import { Navbar } from '../components/Navbar.js';

const nav = Navbar();
root.appendChild(nav);

export function Generate() {
    const root = document.createElement("div");
    root.className = "page-container";

    const heading = document.createElement("h2");
    heading.innerText = "Pick Your Mood 🎧";
    heading.className = "page-heading";

    const playlistContainer = document.createElement("div");
    playlistContainer.id = "playlist-container";

    const onEmotionSelect = async (emotion) => {
        playlistContainer.innerHTML = "Loading...";
        const songs = await getPlaylistFromEmotion(emotion);
        playlistContainer.innerHTML = "";
        playlistContainer.appendChild(SongList(songs));
    };

    root.appendChild(heading);
    root.appendChild(EmotionSelector({ onSelect: onEmotionSelect }));
    root.appendChild(playlistContainer);

    return root;
}
