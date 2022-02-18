import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review"

function ReviewList({ name, introduction, img }) {
  const params = useParams()
  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])
  const userData = {} 


  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then((r) => r.json())
    .then((data) => setUsers(data))
  }, [])

  users.forEach((user) => {
    userData[user.id] = user.name
  })

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${params.gameId}`)
    .then((r) => r.json())
    .then((reviews) => setReviews(reviews))
  }, [params])

  if (params.gameId !== name) {
    return null
  }
  
  return (
    <div>
      <img className="image" src={img} alt={name}/>
      <p className="introduction">{introduction}</p>
      <ul>
        {reviews.map((review) => {
          return(
            <li key={review.id}>
              <Review review={review} userData={userData}/>
            </li>            
          )          
        })}
      </ul>     
    </div>
    
  )

}

export default ReviewList;