import React, {useState} from 'react'
import './style.css'

function Counter() {
    const [count, setCount] = useState(0)

    const decreament = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    const increament = () => {
        setCount(count + 1)
    }

  return (
    <div>
      <p className='count'>{count}</p>
      <button className='button' onClick={decreament}>Decreament</button>
      <button className='button' onClick={reset}>Reset</button>
      <button className='button' onClick={increament}>Increament</button>
    </div>
  )
}

export default Counter
