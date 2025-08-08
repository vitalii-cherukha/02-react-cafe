import css from "./VoteStats.module.css";

import type { Votes } from "../../types/votes";

interface VoteStatsProps {
    count: Votes;
    totalVotes: number;
    positiveCount: number;
}


const VoteStats = ({count, totalVotes, positiveCount}: VoteStatsProps) => {
  return (
    <div className={css.container}>
  <p className={css.stat}>Good: <strong>{count.good}</strong></p>
  <p className={css.stat}>Neutral: <strong>{count.neutral}</strong></p>
  <p className={css.stat}>Bad: <strong>{count.bad}</strong></p>
  <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
  <p className={css.stat}>Positive: <strong>{positiveCount}%</strong></p>
</div>
  )
}

export default VoteStats