import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positiveFeedback = good;
    return Math.round((positiveFeedback / totalFeedback) * 100);
  };

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotalFeedback()}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
    </ul>
  );
};

export default Statistics;