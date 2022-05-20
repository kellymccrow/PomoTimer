import { useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import Slider from './Slider';
import BackButton from './BackButton';

import styles from './Settings.module.css';

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  const handleSettingsClick = () => {
    settingsInfo.setShowSettings(false);
  };

  return (
    <div className={styles['settings-container']}>
      <div className={styles['settings-group']}>
        <label className={styles['settings-label']}>
          Work (minutes): {settingsInfo.workMinutes}
        </label>
        <Slider
          max='120'
          value={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        />
      </div>
      <div className={styles['settings-group']}>
        <label className={styles['settings-label']}>
          Break (minutes): {settingsInfo.breakMinutes}
        </label>
        <Slider
          max='60'
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        />
      </div>
      <BackButton onClick={handleSettingsClick} />
    </div>
  );
};

export default Settings;
