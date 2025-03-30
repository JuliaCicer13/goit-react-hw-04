import styles from './LoadMoreBtn.module.css'
export default function LoadMoreBtn({message, onLoadMore, isDisabled}) {
    return (
        <div className={styles.load}>
        <button className={styles.button ? styles.disable : styles.enable}
         onClick={onLoadMore}
         disabled={isDisabled}
         >{message}
         </button>
        </div>
    )
}