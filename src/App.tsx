import React from 'react';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-solar-dark selection:bg-solar-orange/30">
      <Home />
    </div>
  );
};

export default App;
