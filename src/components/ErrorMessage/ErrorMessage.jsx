import styles from './ErrorMessage.module.css'
export default function Error({message}) {
    return (
        <>
        <p className={styles.error}>{message}</p>
        </>
    )
}