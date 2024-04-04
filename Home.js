import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleStartGame = () => {
    if (username.trim() !== '') {
      history.push('/game');
    }
  };

  return (
    <div>
      <h1>Welcome to Exploding Kittens!</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default Home;
