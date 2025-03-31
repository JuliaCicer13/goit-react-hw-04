import Modal from "react-modal";
import styles from "./ImageModal.module.css"

Modal.setAppElement("#root");

export default function ImageModal ({isOpen, onRequestClose, imageUrl, alt}) {
   return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={styles.modal}
    overlayClassName={styles.overlay}
    >
      <button className={styles.closeButton} onClick={onRequestClose}>
      ✖️
      </button>
      <img src={imageUrl} alt={alt} className={styles.images}/>
    </Modal>
   );
}

