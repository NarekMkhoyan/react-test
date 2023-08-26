import styles from "./Modal.module.scss";

interface IModalProps {
  errorMsg: string;
  onCloseModal: () => void;
}

const Modal: (props: IModalProps) => JSX.Element = (props: IModalProps) => {
  const handleModalClose: () => void = () => {
    props.onCloseModal();
  };

  if (!props.errorMsg) {
    return <div></div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.title}>Error</div>
        <div className={styles.body}>{props.errorMsg}</div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={handleModalClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
