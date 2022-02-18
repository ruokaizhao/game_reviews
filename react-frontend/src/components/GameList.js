import React from "react";
import Game from "./Game"



function GameList({ games }) {

  return (
    <div>
      {games.map((game) => {
        return (
          <ul>
            <li>
              <Game key={game.id} game={game} />
            </li>            
          </ul>          
        )
      })}    
    </div>
  )


}

export default GameList;