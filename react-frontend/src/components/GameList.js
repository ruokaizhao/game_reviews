import React from "react";
import Game from "./Game"

function GameList({ games, testUser }) {

  return (
    <div>
      <ul>
        {games.map((game) => {
          return (        
            <li key={game.id}>
              <Game game={game} testUser={testUser} />
            </li>                   
          )         
        })}  
      </ul>  
    </div>
  )
}

export default GameList;