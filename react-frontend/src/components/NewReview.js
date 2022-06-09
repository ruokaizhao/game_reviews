import React, { useState } from "react";

function NewReview({ game_id, testUser, onAddNewReview }) {
  const [newReview, setNewReview] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: testUser.user_id,
        game_id: game_id,
        review: newReview
      })
    })
    .then((r) => r.json())
    .then((newReview) => onAddNewReview(newReview))
    .then(() => setNewReview(""))
  }

  return (
    <form className="new-message" onSubmit={handleSubmit}>
        <input
        type="text"
        name="review" 
        value={newReview} 
        onChange={(e) => setNewReview(e.target.value)}
        />        
        <button type="submit">Submit</button>
    </form>
  )
}

export default NewReview;