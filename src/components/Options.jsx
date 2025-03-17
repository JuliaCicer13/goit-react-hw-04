import styles from './Options.module.css';

export default function Options ({updadeFeedback}) {
   
    return (
        <div className={styles.buttons}>
           <button onClick ={() => updadeFeedback('good')}>Good</button>
           <button onClick={() => updadeFeedback('bad')}>Bad</button>
           <button onClick={() => updadeFeedback('neutral')}>Neutral</button>
        </div>
        
    );
}