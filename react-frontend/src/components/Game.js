import React from "react";
import { Route, NavLink, useRouteMatch, useParams } from "react-router-dom";
import Review from "./Review"

function Game(props) {

  const {name, price, company, introduction, img} = props.game
  const match = useRouteMatch()

  return (
    <div>
      <ul>
        <li>
          <NavLink to={`/games/${name}`}>
            <h2>{name}</h2>
          </NavLink>        
          <h3>From: {company}</h3>
          <h4>Price: {price}</h4>
          <Route path={`/games/:gameId`}>
            <Review name={name} introduction={introduction} img={img}/>
          </Route>
        </li>
      </ul>      
    </div>    
  )
}


export default Game;