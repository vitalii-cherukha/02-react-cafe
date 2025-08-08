import css from './VoteOptions.module.css'
import { type VoteType } from '../../types/votes'
interface CountButtonsProps {
   handleClick: (value: VoteType) => void
}


const VoteOptions = ({ handleClick }: CountButtonsProps) => {
  return (
    <div className={css.container}>
  <button  onClick={()=> {handleClick('good')}} className={css.button}>Good</button>
  <button  onClick={()=> {handleClick('neutral')}} className={css.button}>Neutral</button>
  <button  onClick={()=> {handleClick('bad')}} className={css.button}>Bad</button>
  <button className={`${css.button} ${css.reset}`}>Reset</button>
</div>
  )
}

export default VoteOptions