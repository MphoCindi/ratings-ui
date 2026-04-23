const Star = ({star, rating, hover, color, ratingClick, hoverClick, hoverLeave}) => {
    return ( <span 
        onClick={() => ratingClick(star)}
        onMouseEnter={() => hoverClick(star)}
        onMouseLeave={hoverLeave}
        className="star"
        style={{color: star <= (hover || rating) ? color : '#ccc'}}>
        {'\u2605'}
    </span> );
}
 
export default Star;