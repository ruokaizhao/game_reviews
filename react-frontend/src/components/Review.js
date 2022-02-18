import React from "react";

function Review({ review, userData }) {
  const timeStamp = new Date(review.created_at).toLocaleDateString()
  const user = userData[review.user_id]
  return (
    <div>
      <p>{user}</p>
      <p>{timeStamp}</p>
      <p>{review.review}</p>      
    </div>
  )









}

export default Review;