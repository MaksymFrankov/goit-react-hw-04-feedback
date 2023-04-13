import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

const Feedback = ({ initialGood = 0, initialNeutral = 0, initialBad = 0 }) => {
  const [good, setGood] = useState(initialGood);
  const [neutral, setNeutral] = useState(initialNeutral);
  const [bad, setBad] = useState(initialBad);

  const handleChange = (event) => {
    const value = event.target.value;

    switch (value) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        console.error(`Invalid feedback type: ${value}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good >= 1) {
      return Math.round((good / countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onFeedback={handleChange}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;