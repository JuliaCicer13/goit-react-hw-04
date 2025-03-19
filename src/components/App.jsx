import Feedback from './Feedback.jsx'; 
import Options from './Options.jsx';
import Notification from './Notification.jsx';
import { useState, useEffect } from 'react';
import Description from './Description.jsx';

export default function App () {
 
const [feedback, setFeedback] = useState(
  {
      good: 0,
      neutral: 0,
      bad: 0 
   
  }
   
  
)
useEffect(() => {
      feedback + 1
})
const totalFeedback = good + neutral + bad;

const updateFeedback = (feedbackType) => {
 setFeedback(
    ...feedbackType,
     feedbackType + 1
  
  );


 }
  return (
    <>
      <Description/>   
      <Options 
      updateFeedback={updateFeedback} />
      
      { totalFeedback > 0 ? (< Feedback
       good={feedback.good}
       bad={feedback.bad}
       neutral={feedback.neutral}
      />}
      <Notification  />

    </>
      
  );
};

  