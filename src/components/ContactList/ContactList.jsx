import styles from './ContactList.module.css';
import Contacts from './Contacts';
export default function ContactList ({users, onDelete}) {
    return (
        <ul className={styles.list}>
            {users.map(user => (
            <Contacts
            onDelete={onDelete}
            key={user.id}
            name={user.name}
            number={user.number}
            />
            ))}
        </ul>
    )
}