import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GameList from "./GameList";

function App() {
  const [games, setGames] = useState([])
  const testUser = {
    user_id: 1,
    name: "Walker Kohler"
  }
  

  useEffect(() => {
    fetch("http://localhost:9292/")
    .then((r) => r.json())
    .then((games) => setGames(games))
  }, [])

  

  return (
    <div>
      <Switch>
        <Route path="/">
          <GameList games={games} testUser={testUser}/>
        </Route>
      </Switch>      
    </div>
    
  )


}

export default App;