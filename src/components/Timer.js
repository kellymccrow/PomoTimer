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

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const countdown = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    const switchMode = () => {
      setIsPaused(true);
      isPausedRef.current = true;

      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds =
        nextMode === 'work' ? ctx.workMinutes * 60 : ctx.breakMinutes * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };

    secondsLeftRef.current = ctx.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const timerInterval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      countdown();
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [ctx]);

  const handleSettingsClick = () => {
    ctx.setShowSettings(true);
  };

  const handlePauseClick = () => {
    setIsPaused(true);
    isPausedRef.current = true;
  };

  const handleStartClick = () => {
    setIsPaused(false);
    isPausedRef.current = false;
  };

  const totalSeconds =
    mode === 'work' ? ctx.workMinutes * 60 : ctx.breakMinutes * 60;
  const timerValue = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;
  const timerText = minutes + ':' + seconds;

  const workMode = mode === 'work';

  return (
    <div
      className={styles['timer-background']}
      style={{ backgroundColor: workMode ? '#ff9f1c' : '#2ec4b6' }}
    >
      <div className={styles['timer-container']}>
        <CircularProgressbar
          value={timerValue}
          text={timerText}
          strokeWidth={6}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: workMode ? '#feedd6' : '#cbf3f0',
            trailColor: workMode ? '#ffbf69' : '#7ddcd3',
            textColor: workMode ? '#feedd6' : '#cbf3f0',
          })}
        />
        {isPaused ? (
          <StartButton onClick={handleStartClick} workMode={workMode} />
        ) : (
          <StopButton onClick={handlePauseClick} workMode={workMode} />
        )}
        <SettingsButton onClick={handleSettingsClick} workMode={workMode} />
      </div>
    </div>
  );
};

export default Timer;
