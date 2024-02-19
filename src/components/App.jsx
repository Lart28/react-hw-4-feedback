import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import { Notification } from "./Statistics/Notification";

export default function App() {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'Good':
        setGood(Good + 1);
        break
      case 'Neutral':
        setNeutral(Neutral + 1);
        break
      case 'Bad':
        setBad(Bad + 1);
        break
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return Good + Neutral + Bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return (Good * 100) / (Good + Neutral + Bad);
  }

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={addFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? <Statistics good={Good} neutral={Neutral} bad={Bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    )
}

// hello