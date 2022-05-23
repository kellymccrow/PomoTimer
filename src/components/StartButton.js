import styles from './Button.module.css';

const StartButton = (props) => {
  return (
    <button
      className={`${styles.button} ${
        !props.workMode && styles['button-break']
      }`}
      onClick={props.onClick}
    >
      Start
    </button>
  );
};

export default StartButton;
