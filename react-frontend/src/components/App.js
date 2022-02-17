import React, { useState, useEffect } from "react";
import GameList from "./GameList";

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/games")
    .then((r) => r.json())
    .then((games) => setGames(games))
  }, [])

  return (
    <div>
      <GameList games={games} />
    </div>
    
  )


}

export default App;