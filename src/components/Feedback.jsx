import style from './Feedback.module.css';

export default function Feedback ({good, bad, neutral}) {
       
        return (
            <>
            <ul className={style.list}>
            <li className={style.wrap}>Good:{good}</li>
            <li className={style.wrap}>Bad:{bad}</li>
            <li className={style.wrap}>Neutral:{neutral}</li>
            </ul>
           
            </>
        )
       }





