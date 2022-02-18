import React, { useState } from "react";
import EditReview from "./EditReview";

function Review({ review, userData, testUser, onDeleteReview, onEditReview }) {
  const timeStamp = new Date(review.created_at).toLocaleDateString()
  const user = userData[review.user_id]
  const [isEditing, setIsEditing] = useState(false)

  let isCurrentUser = testUser.name === user

  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => onDeleteReview(review.id))
  }

  function handleEditReview(updatedReview) {
    onEditReview(updatedReview)
    setIsEditing((isEditing) => !isEditing)
  }

 


  return (
    <div className="show-button">
      <span>{user}</span>
      <span>{timeStamp}</span>
      {
        isEditing ?
        <EditReview review={review.review} id={review.id} onEditReview={handleEditReview} />
        : <p>{review.review}</p>
      }      
      {
        isCurrentUser ?
        <div className="actions">
          <button onClick={handleDeleteClick}>
            Delete
          </button>
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            Edit
          </button>
        </div>
        
        : null
      }
    </div>
  )









}

export default Review;