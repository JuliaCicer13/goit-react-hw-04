import styles from './Options.module.css';

export default function Options ({updateFeedback, resetFeedback, showReset}) {
   
    return (
        <div className={styles.buttons}>
           <button onClick ={() => updateFeedback('good')}>Good</button>
           <button onClick={() => updateFeedback('bad')}>Bad</button>
           <button onClick={() => updateFeedback('neutral')}>Neutral</button>
         {(showReset && <button onClick={() => resetFeedback('reset')}>Reset</button>)} 
        </div>
        
    );
}