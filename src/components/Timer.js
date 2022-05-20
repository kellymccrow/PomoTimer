import { CircularProgressbar } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';

import StartButton from './StartButton';
import StopButton from './StopButton';
import SettingsButton from './Settings/SettingsButton';

import styles from './Timer.module.css';
import 'react-circular-progressbar/dist/styles.css';

const Timer = (props) => {
  return (
    <div className={styles['timer-container']}>
      <CircularProgressbar
        value={45}
        maxValue={60}
        text={45}
        strokeWidth={6}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: '#feedd6',
          trailColor: '#ffbf69',
          textColor: '#feedd6',
        })}
      />
      <StartButton />
      <SettingsButton />
    </div>
  );
};

export default Timer;
