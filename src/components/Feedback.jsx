import style from './Feedback.module.css';

export default function Feedback ({good, bad, neutral, positive,total}) {
       
        return (
            <>
            <ul className={style.list}>
            <li className={style.wrap}>Good:{good}</li>
            <li className={style.wrap}>Bad:{bad}</li>
            <li className={style.wrap}>Neutral:{neutral}</li>
            <li className={style.wrap}>Total:{total}</li>
            <li className={style.wrap}>Positive{positive}</li>
            </ul>
           
            </>
        )
       }





