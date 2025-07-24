import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const SatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sum = good+neutral+bad;
  if (sum === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  const avg = (good-bad)/sum;
  const percentage = (good/sum)*100;

  return (
    <table>
      <tbody>
        <SatisticLine text={'good'} value={good} />
        <SatisticLine text={'neutral'} value={neutral} />
        <SatisticLine text={'bad'} value={bad} />
        <SatisticLine text={'all'} value={sum} />
        <SatisticLine text={'average'} value={avg} />
        <SatisticLine text={'positive'} value={`${percentage} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const plusGood = () => {
    const newGood = good+1;
    setGood(newGood);
  }

  const plusNeutral = () => {
    const newNeutral = neutral+1;
    setNeutral(newNeutral);
  }

  const plusBad = () => {
    const newBad = bad+1;
    setBad(newBad);
  }

  return (
    <div>
      <Header text={'give feedback'} />
      <Button onClick={plusGood} text={'good'} />
      <Button onClick={plusNeutral} text={'neutral'} />
      <Button onClick={plusBad} text={'bad'} />
      <Header text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

export default App
