import styles from './Options.module.css';

export default function Options ({updateFeedback}) {
   
    return (
        <div className={styles.buttons}>
           <button onClick ={() => updateFeedback('good')}>Good</button>
           <button onClick={() => updateFeedback('bad')}>Bad</button>
           <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        </div>
        
    );
}