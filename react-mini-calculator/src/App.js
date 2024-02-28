import React from "react"
import Count from "./Count";

export default function App() {
  const [count, setCount] = React.useState(0)

  function add(){
    setCount(prevCount => prevCount + 1)
  }

  function substract(){
    setCount(prevCount => prevCount - 1)
  }

    return (
      <div className="counter">
        <button className="counter--minus" onClick={substract}>-</button>
          <div className="counter--count">
            <Count number={count} />
          </div>
        <button className="counter--plus" onClick={add}>+</button>
      </div>
    )
}
