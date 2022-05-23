import styles from './Button.module.css';

const StopButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      Stop
    </button>
  );
};

export default StopButton;
