import React from 'react';
import ReactDOM from 'react-dom';
import { PlaylistCard } from './PlaylistCard';

const playlist = {
    title: 'Chill Vibes',
    description: 'Relax and unwind with soft tunes.',
    imageUrl: 'https://i.scdn.co/image/ab67706f0000000216bb79962dbdabd9b5d8ca02',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj'
};

ReactDOM.render(
    React.createElement(PlaylistCard, playlist),
    document.getElementById('root')
);
