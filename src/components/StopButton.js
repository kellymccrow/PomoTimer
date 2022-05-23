import styles from './Button.module.css';

const StopButton = (props) => {
  return (
    <button
      className={`${styles.button} ${
        !props.workMode && styles['button-break']
      }`}
      onClick={props.onClick}
    >
      Stop
    </button>
  );
};

export default StopButton;
