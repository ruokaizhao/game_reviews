import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GameList from "./GameList";

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/")
    .then((r) => r.json())
    .then((games) => setGames(games))
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/">
          <GameList games={games} />
        </Route>
      </Switch>      
    </div>
    
  )


}

export default App;