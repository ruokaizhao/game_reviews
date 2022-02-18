import React, { useState } from "react";


function EditReview({ review, id, onEditReview }) {
  const [editedReview, setEditedReview] = useState(review)

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: editedReview
      })
    })
    .then((r) => r.json())
    .then((updatedReview) => onEditReview(updatedReview))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="edit"
        value={editedReview}
        onChange={(e) => setEditedReview(e.target.value)}
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  )

}


export default EditReview;