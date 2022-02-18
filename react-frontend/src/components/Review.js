import React, { useState } from "react";

function Review({ review, userData }) {
  const timeStamp = new Date(review.created_at).toLocaleDateString()
  const user = userData[review.user_id]
  return (
    <div>
      <span>{user}</span>
      <span>{timeStamp}</span>
      <p>{review.review}</p>
    </div>
  )









}

export default Review;