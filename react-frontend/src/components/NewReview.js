import React, { useState } from "react";

function NewReview({ game_id, testUser, onAddNewReview }) {
  const [newReview, setNewReview] = useState("")




  return (
    <form className="new-message" onSubmit={handleSubmit}>
        <textarea
        name="review" 
        value={newReview} 
        onChange={(e) => setNewReview(e.target.value)}
        rows="4" cols="50"/>        
        <button type="submit">Add your review</button>
    </form>
  )
}

export default NewReview;