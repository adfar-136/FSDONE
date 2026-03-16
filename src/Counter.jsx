import React from 'react'

function Counter() {
    // var count = 0;
    // function handleClick() {
    //     count = count + 1;
    //     console.log(count);
    // }
    const [count, setCount] = React.useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <h1>{365}</h1>
    </div>
  )
}

export default Counter
