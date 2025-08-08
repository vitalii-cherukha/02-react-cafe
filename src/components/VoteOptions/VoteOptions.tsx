import css from './VoteOptions.module.css'
import { type VoteType } from '../../types/votes'
interface CountProps {
    handleClick: (value: VoteType) => void,
    resetVotes: () => void,
    hasVotes: boolean;
}


const VoteOptions = ({ handleClick, resetVotes, hasVotes }: CountProps) => {
  return (
    <div className={css.container}>
  <button  onClick={()=> {handleClick('good')}} className={css.button}>Good</button>
  <button  onClick={()=> {handleClick('neutral')}} className={css.button}>Neutral</button>
  <button  onClick={()=> {handleClick('bad')}} className={css.button}>Bad</button>
  {hasVotes && (<button onClick={resetVotes} className={`${css.button} ${css.reset}`}>Reset</button>)}
</div>
  )
}

export default VoteOptions