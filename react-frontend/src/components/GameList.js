import React from "react";
import Game from "./Game"



function GameList({ games }) {

  return (
    <div>
      {games.map((game) => {
        return (
          <>
            <Game key={game.id} game={game} />
          </>          
        )
      })}    
    </div>
  )


}

export default GameList;