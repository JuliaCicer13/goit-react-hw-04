import styles from './LoadMoreBtn.module.css'
export default function LoadMoreBtn({message, onLoadMore, isDisabled}) {
    return (
        <>
        <button className={isDisabled ? styles.disable : styles.enable}
         type="button"
         onClick={onLoadMore}
         disabled={isDisabled}
         >{message}
         </button>
        </>
    )
}