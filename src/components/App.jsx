import Feedback from './Feedback.jsx'; 
import Options from './Options.jsx';
import Notification from './Notification.jsx';
import { useState } from 'react';
import Description from './Description.jsx';

export default function App () {
 
const [feedback, setFeedback] = useState(
  {

    feedbackType : {
      good: 0,
      neutral: 0,
      bad: 0
    }
   
  }
   
  
)
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
      updadeFeedback={updateFeedback} />
      
      <Feedback
       good={feedback.good}
       bad={feedback.bad}
       neutral={feedback.neutral}
      />
      <Notification  />

    </>
      
  );
};

  