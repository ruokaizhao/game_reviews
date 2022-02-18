import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Review({ name, introduction, img }) {
  const params = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/games/reviews/${params.gameId}`)
    .then((r) => r.json())
    .then((reviews) => setReviews(reviews))
  }, [])

  if (params.gameId !== name) {
    return null
  }
  
  return (
    <div>
      <img className="image" src={img} alt={name}/>
      <p className="introduction">{introduction}</p>
    </div>
    
  )

}

export default Review;