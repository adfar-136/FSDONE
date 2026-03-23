import React from 'react'

function Counter({render}) {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return render({ count, increment, decrement });
}

export default Counter
