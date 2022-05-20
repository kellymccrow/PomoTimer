import { useState } from 'react';

import Timer from './components/Timer';
import Settings from './components/Settings/Settings';

import './App.css';

function App() {
  const [showSettings, setShowSettings] = useState(true);
  return (
    <div className='App' style={{ backgroundColor: '#ff9f1c' }}>
      {showSettings ? <Settings /> : <Timer />}
    </div>
  );
}

export default App;
