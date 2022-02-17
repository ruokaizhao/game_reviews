import React from "react";
import Game from "./Game"



function GameList({ games }) {

  return (
    <div>
      <ul>
      {games.map((game) => {
        return (
          <li key={game.id}>
            <Game game={game} />
          </li>          
        )
      })}
      </ul>      
    </div>
  )


}

export default GameList;