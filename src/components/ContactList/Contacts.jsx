import styles from './Contacts.module.css'

export default function Contacts ({ id, name, number, onDelete}) {
return (
    <li className={styles.wrap}>
        <p className={styles.name}>
           {name}
        </p>
        <p className={styles.number}>
          {number}
        </p>
        <button onClick={() => onDelete(id) } type='submit'>Delete</button>
    </li>
)

}