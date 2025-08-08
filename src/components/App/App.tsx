import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOption/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'
import { type VoteType, type Votes } from '../../types/votes'

const App = () => {
  const [count, setCount] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleClick = (type: VoteType) => {
    setCount({
      ...count,
      [type]: count[type] + 1
    })
  }

  const resetVotes = () => {
    setCount({ good: 0,
    neutral: 0,
    bad: 0})
  }

  const totalVotes = count.bad + count.good + count.neutral;

  const positiveCount = totalVotes ? Math.round((count.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions handleClick={ handleClick} resetVotes={resetVotes} hasVotes={totalVotes > 0} />
      {totalVotes > 0 ? (<VoteStats count={count} totalVotes={totalVotes} positiveCount={positiveCount} />) : <Notification/>}
        
  </div>
  )
}

export default App
