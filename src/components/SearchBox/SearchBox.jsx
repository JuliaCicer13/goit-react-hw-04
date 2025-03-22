import styles from './SearchBox.module.css';
import { useId } from 'react';

export default function SearchBox({value, onFilter}) {
    const LabelId = useId();
    return(
        <div className={styles.container}>
        <label className={styles.label} htmlFor={LabelId}>Find contacts by name</label>
        <input type="text" value={value} onChange={ e => onFilter(e.target.value)} />
        </div>
    )
}