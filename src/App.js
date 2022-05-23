import { useState } from 'react';

import Timer from './components/Timer';
import Settings from './components/Settings/Settings';

import SettingsContext from './context/SettingsContext';

import './App.css';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <SettingsContext.Provider
      value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        showSettings,
        setShowSettings,
      }}
    >
      {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
  );
}

export default App;
