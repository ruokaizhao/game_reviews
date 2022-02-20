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

  function handleComfirm() {
    const userInput = window.prompt("please enter your name to confirm:")
    if (userInput === testUser.name) {
      handleDeleteClick()
    } else if (userInput === null) {
      return
    } else handleComfirm()
  }

  function handleEditReview(updatedReview) {
    onEditReview(updatedReview)
    setIsEditing((isEditing) => !isEditing)
  }

  return (
    <div className="show-button">
      <span className="user">{user}</span>
      <span className="time">{timeStamp}</span>
      {
        isEditing ?
        <EditReview review={review.review} id={review.id} onEditReview={handleEditReview} />
        : <p className="review">{review.review}</p>
      }      
      {
        isCurrentUser ?
        <div className="actions">          
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          <button onClick={handleComfirm}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </div>        
        : null
      }
    </div>
  )
}

export default Review;