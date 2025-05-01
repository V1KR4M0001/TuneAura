import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/EmotionSelector.css';

const EmotionSelector = ({ onSelect }) => {
    const [customEmotion, setCustomEmotion] = useState('');
    const emotions = ['Happy', 'Sad', 'Energetic', 'Calm', 'Romantic', 'Nostalgic', 'Excited'];

    const handleCustomEmotionSubmit = (e) => {
        e.preventDefault();
        if (customEmotion.trim()) {
            onSelect(customEmotion);
            setCustomEmotion('');
        }
    };

    return (
        <div className="emotion-selector">
            <div className="emotion-buttons">
                {emotions.map((emotion) => (
                    <motion.button
                        key={emotion}
                        className="emotion-button"
                        onClick={() => onSelect(emotion)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {emotion}
                    </motion.button>
                ))}
            </div>

            <div className="custom-emotion">
                <form onSubmit={handleCustomEmotionSubmit}>
                    <input
                        type="text"
                        value={customEmotion}
                        onChange={(e) => setCustomEmotion(e.target.value)}
                        placeholder="Enter your own mood..."
                        className="custom-emotion-input"
                    />
                    <motion.button
                        type="submit"
                        className="custom-emotion-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!customEmotion.trim()}
                    >
                        Go
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default EmotionSelector;