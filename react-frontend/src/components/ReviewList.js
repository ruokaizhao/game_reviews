import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewList({ name, introduction, img }) {
  const params = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${params.gameId}`)
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
      {
        reviews.map((review) => {
          <ul>
            <li>
              <Review />
            </li>
          </ul>
        })
      }
    </div>
    
  )

}

export default ReviewList;