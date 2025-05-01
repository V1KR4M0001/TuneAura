import { Generate } from './pages/Generate.js';
import './styles/global.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    const app = Generate();
    root.innerHTML = '';    
    root.appendChild(app);  
  } else {
    console.error('Root element not found!');
  }
});
