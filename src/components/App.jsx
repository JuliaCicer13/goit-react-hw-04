import Feedback from './Feedback.jsx'; 
import Options from './Options.jsx';
import Notification from './Notification.jsx';
import { useState,  useEffect } from 'react';
import Description from './Description.jsx';

export default function App () {
  
  const [feedback, setFeedback] = useState(({
    good: 0,
    neutral: 0,
    bad: 0}) 
)
function handleClick(event) {
  event.preventDefault();
  setFeedback(feedback + 1)
}
  return (
    <>
      <Description/>   
      <Options/>
      <Feedback onClick={handleClick}/>
      <Notification />
    </>
      
  );
};

  