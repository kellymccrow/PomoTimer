import { useContext, useState, useEffect, useRef } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';

import SettingsContext from '../context/SettingsContext';

import StartButton from './StartButton';
import StopButton from './StopButton';
import SettingsButton from './Settings/SettingsButton';

import styles from './Timer.module.css';
import 'react-circular-progressbar/dist/styles.css';

const Timer = (props) => {
  const ctx = useContext(SettingsContext);

  const [isPaused, setIsPause] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const initTimer = () => {
    setSecondsLeft(ctx.workMinutes * 60);
  };

  const switchMode = () => {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds =
      nextMode === 'work' ? ctx.workMinutes * 60 : ctx.breakMinutes * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  };

  const countdown = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    initTimer();

    const timerInterval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      countdown();
    }, 1000);

    return clearInterval(timerInterval);
  }, [ctx]);

  const handleSettingsClick = () => {
    ctx.setShowSettings(true);
  };

  const timerValue = secondsLeft * 60;

  return (
    <div className={styles['timer-container']}>
      <CircularProgressbar
        value={timerValue}
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
      {isPaused ? <StartButton /> : <StopButton />}
      <SettingsButton onClick={handleSettingsClick} />
    </div>
  );
};

export default Timer;
