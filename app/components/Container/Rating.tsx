import React, { Dispatch, useState } from 'react';

type RatingChangeCallback = (itemId: string, newRating: number) => void;
type RatingProps = {
  itemId: string,
  maxRating: number,
  initialRating: any,
  onRatingChange: RatingChangeCallback,
}

const Rating = ({ maxRating, itemId, onRatingChange, initialRating }: RatingProps) => {
  const handleRatingChange = (newRating: number) => {
    onRatingChange(itemId, newRating);
  };
    
  return (
    <div className="rating">
      {[...Array(maxRating).keys()].map((star) => {
        return (
            <input
              key={star}
              type="radio"
              name={`rating-${itemId}`}
              className={`mask mask-star-2 bg-orange-400`}
              checked={star + 1 === initialRating}
              onChange={() => handleRatingChange(star + 1)}
            />
        )
      })}
    </div>
  );
};

export default Rating;
