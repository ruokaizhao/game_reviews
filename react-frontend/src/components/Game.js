import React from "react";

function Game(props) {

  const {name, price, company, introduction, img} = props.game

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name}/>
      <h3>{company}</h3>
      <h3>{price}</h3>
      <h4>{introduction}</h4>
    </div>
  )

}


export default Game;