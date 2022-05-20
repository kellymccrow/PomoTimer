import styles from '../Button.module.css';

const BackButton = (props) => {
  return (
    <button
      className={styles.button}
      style={{ color: '#f25c54' }}
      onClick={props.onClick}
    >
      Close
    </button>
  );
};

export default BackButton;
