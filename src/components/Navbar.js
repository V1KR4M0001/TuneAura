import '../styles/Navbar.css';

export function Navbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerText = '🎵 Emotionify';

    const menu = document.createElement('ul');
    menu.className = 'nav-links';

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Generate', path: '/generate' },
        { name: 'My Playlists', path: '/playlists' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.path;
        a.innerText = link.name;
        li.appendChild(a);
        menu.appendChild(li);
    });

    nav.appendChild(logo);
    nav.appendChild(menu);

    return nav;
}
