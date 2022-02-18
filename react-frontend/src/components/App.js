import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GameList from "./GameList";
import NavBar from "./NavBar"

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/games")
    .then((r) => r.json())
    .then((games) => setGames(games))
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/games">
          <GameList games={games} />
        </Route>
        <Route exact path="/">
          <h1>Welcome!</h1>
        </Route>
      </Switch>      
    </div>
    
  )


}

export default App;