import React from 'react';

const RatingCircle = (props) => {

        let rating = props.rating;
        if(!rating.includes('.') && rating<10){
            rating = rating + '.0';
            if(rating === 0){
                rating = ""
            }
        }
        else{
            rating = props.rating;
        }

        const checkRatingColor = (rating) => {
            if(rating < 7 && rating > 4){
                return 'yellow';
            }
            else if(rating < 4 && rating > 0){
                return 'red';
            }
            else if(rating === 0){
                return 'none'
            }
            else{
                return 'green';
            }
        }

    return(
        <div>
            <svg width="60" height="60">
            <circle cx="30" cy="30" r="25" stroke={checkRatingColor(props.rating)} strokeWidth="3" fill="#141d21" fillOpacity="0.5" />
            <text fill="#ffffff" fontSize="15" fontFamily="Verdana" x="30%" y="60%">{rating}</text>
            </svg>
        </div>
    )
}

export default RatingCircle;