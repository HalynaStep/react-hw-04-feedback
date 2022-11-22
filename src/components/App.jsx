import { useState } from 'react';
import { Section } from 'components/Section/section';
import { FeedbackOptions } from 'components/FeedbackOptions/feedbackOptions';
import { Statistics } from 'components/Statistics/statistics';
import { Notification } from 'components/Notification/notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];
  const total = totalFeedback();

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        throw new Error(`Unknows feedback name`);
    }
  };

  function totalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return Math.round((good / totalFeedback()) * 100);
  }
  return (
    <div className="App">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'Here is no feedback'} />
        )}
      </Section>
    </div>
  );
}
