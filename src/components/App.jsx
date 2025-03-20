import Feedback from './Feedback.jsx'; 
import Options from './Options.jsx';
import Notification from './Notification.jsx';
import { useState, useEffect} from 'react';
import Description from './Description.jsx';

export default function App () {

const [feedback, setFeedback] = useState(() =>
  {
   const savedFeedback = localStorage.getItem('feedback')
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return 0;
  });

useEffect(() => {
  localStorage.setItem('feedback',JSON.stringify(feedback));

 }, [feedback]);


const updateFeedback = feedbackType => {
 setFeedback({
    ...feedback,
     [feedbackType]: feedback[feedbackType] + 1
  
});

 }
 const resetFeedback = () => {
 setFeedback({
  good: 0,
  neutral: 0,
  bad: 0 
 }) 
 }
 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
 const positiveFeedback = totalFeedback > 0 ?
 Math.round((feedback.good / totalFeedback) * 100) : 0

 
  return (
    <>
      <Description/>   
      <Options 
      showReset={totalFeedback > 0}
      resetFeedback = {resetFeedback }
      updateFeedback={updateFeedback} />
      
      { totalFeedback > 0 ? (
      < Feedback
       good={feedback.good}
       bad={feedback.bad}
       neutral={feedback.neutral}
       total={totalFeedback}
       positive={positiveFeedback}
     />

     ) : (
      <Notification  />
    )}
    </>
      
  );
};

  