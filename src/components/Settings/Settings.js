import styles from './Settings.module.css';

const Settings = () => {
  return (
    <div className={styles['settings-container']}>
      <label>Work minutes:</label>
      <label>Break minutes:</label>
    </div>
  );
};

export default Settings;
