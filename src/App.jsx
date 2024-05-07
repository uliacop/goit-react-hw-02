import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
 const [feedback, setFeedback] = useState(() => {
    const savedClicks = localStorage.getItem("key-clicks");
    return savedClicks !== null ? JSON.parse(savedClicks) : initialFeedback;
  });

  useEffect(() => {
    localStorage.setItem("key-clicks", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const handleReset = () => {
    setFeedback(initialFeedback);
  };

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        reset={handleReset}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
