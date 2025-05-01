import React from 'react';
import { PlaylistCard } from './PlaylistCard';

export function Home() {
    const playlist = {
        title: 'Chill Vibes',
        description: 'Relax and unwind with soft tunes.',
        imageUrl: 'https://i.scdn.co/image/ab67706f0000000216bb79962dbdabd9b5d8ca02',
        spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj'
    };

    return React.createElement(
        'div',
        { className: 'home-container' },
        React.createElement('h1', null, 'Welcome to the Home Page'),
        React.createElement(PlaylistCard, playlist)
    );
}
