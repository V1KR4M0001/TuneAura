import '../styles/PlaylistCard.css';

export function PlaylistCard({ title, description, imageUrl, spotifyUrl }) {
    const card = document.createElement('div');
    card.className = 'playlist-card';

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = `${title} cover`;
    image.className = 'playlist-image';

    const info = document.createElement('div');
    info.className = 'playlist-info';

    const titleEl = document.createElement('h3');
    titleEl.innerText = title;

    const desc = document.createElement('p');
    desc.innerText = description;

    const link = document.createElement('a');
    link.href = spotifyUrl;
    link.innerText = 'Open in Spotify';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'spotify-link';

    info.appendChild(titleEl);
    info.appendChild(desc);
    info.appendChild(link);

    card.appendChild(image);
    card.appendChild(info);

    return card;
}
