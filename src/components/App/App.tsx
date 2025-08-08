import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOption/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'
import { type VoteType, type Votes } from '../../types/votes'
import 'clsx';

const App = () => {
  const [count, setCount] = useState<Votes>({ good: 0, neutral: 0, bad: 0 })
  const handleClick = (value: VoteType) => {
    setCount({
      ...count,
      [value]: + count[value] + 1
    })
  }

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions handleClick={ handleClick} />
      <VoteStats />
      <Notification/>
  </div>
  )
}

export default App
