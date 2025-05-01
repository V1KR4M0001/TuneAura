import './styles/EmotionSelector.css';

export function EmotionSelector({ onSelect }) {
    const emotions = ['Happy', 'Sad', 'Energetic', 'Calm', 'Romantic'];

    const container = document.createElement('div');
    container.className = 'emotion-container';

    emotions.forEach((emotion) => {
        const button = document.createElement('button');
        button.innerText = emotion;
        button.className = 'emotion-button';
        button.onclick = () => onSelect(emotion);
        container.appendChild(button);
    });

    return container;
}
