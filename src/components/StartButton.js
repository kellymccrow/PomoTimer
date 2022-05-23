import styles from './Button.module.css';

const StartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      Start
    </button>
  );
};

export default StartButton;
