import { useState } from "react";
import Star from "./Star";

const Ratings = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const stars = Array.from({length: 5}, (_, i) => i + 1)
  return ( 
  <div className="rating-container">
    <h2>Rate your experience</h2>
    <div className="stars">
        {stars.map((star) => (
          <Star 
              key={star} 
              star={star}
              rating={rating}
              hover={hover}
              color={'#ff9933'}
              ratingClick={setRating}
              hoverEnter={setHover}
              hoverLeave={() => setHover(null)}
          />
        ))}
    </div>
  </div> 
  );
}
 
export default Ratings