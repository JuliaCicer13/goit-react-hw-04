import styles from './Contacts.module.css'

export default function Contacts ({ id, name, number, handleDelete}) {
return (
    <li className={styles.wrap}>
        <p className={styles.name}>
           {name}
        </p>
        <p className={styles.number}>
          {number}
        </p>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
)

}