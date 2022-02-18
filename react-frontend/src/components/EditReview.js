import React, { useState } from "react";


function EditReview({ review, id, onEditReview }) {
  const [editedReview, setEditedReview] = useState(review)



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