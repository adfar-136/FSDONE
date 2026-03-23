import React, { useOptimistic } from 'react'

function LikeCounter() {
    const [likes, setLikes] = React.useState(0)
    const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes)

    async function handleClick(){
        React.startTransition(async () => {
            setOptimisticLikes(optimisticLikes + 1)

            await new Promise((resolve) => setTimeout(resolve, 10000))

            setLikes((prev) => prev + 1)
        })
    }
  return (
    <div>
      <button onClick={handleClick}>Like</button>
      <p>{optimisticLikes} likes</p>
    </div>
  )
}

export default LikeCounter
