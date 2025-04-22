import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <div>🎧 Music Explorer – Start coding with TypeScript!</div>;
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}