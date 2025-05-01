import './styles/SongList.css';

export function SongList(songs) {
    const container = document.createElement('div');
    container.className = 'song-list';

    songs.forEach((song) => {
        const card = document.createElement('div');
        card.className = 'song-card';

        const title = document.createElement('h4');
        title.innerText = song.title;

        const artist = document.createElement('p');
        artist.innerText = song.artist;

        const link = document.createElement('a');
        link.href = song.link;
        link.innerText = 'Listen';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        card.appendChild(title);
        card.appendChild(artist);
        card.appendChild(link);

        container.appendChild(card);
    });

    return container;
}
