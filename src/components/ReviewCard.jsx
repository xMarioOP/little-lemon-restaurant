import React from "react";

const ReviewCard = ({ rating, image, name, review }) => {
  // Create stars based on rating
  const stars = Array(5)
    .fill("☆")
    .map((star, index) => (index < rating ? "★" : "☆"));

  return (
    <div className="review-card">
      <div className="review-rating">{stars.join(" ")}</div>
      <div className="review-image">
        <img src={image} alt={name} />
      </div>
      <h4 className="review-name">{name}</h4>
      <p className="review-text">{review}</p>
    </div>
  );
};

export default ReviewCard;