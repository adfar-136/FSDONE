import React, { useEffect } from 'react'

function JokeGenerator() {
    const [joke, setJoke] = React.useState({});
    async function handleJoke() {
        const data =await fetch("https://official-joke-api.appspot.com/random_joke");
        const joke = await data.json();
        setJoke(joke);
    }
    useEffect(() => {   
        handleJoke();
    },[])
  return (
    <div>
        <h1>{joke.setup}</h1>
        <p>{joke.punchline}</p>
      <button onClick={handleJoke}>Generate Joke</button>
    </div>
  )
}

export default JokeGenerator
