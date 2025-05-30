
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById("root")!;

// Simple client-side rendering
createRoot(container).render(<App />);
