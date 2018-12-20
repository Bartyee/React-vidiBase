import React from 'react';
import classes from './RatingCircle.module.scss';

const RatingCircle = (props) => {

        let rating = props.rating;
        if(!rating.includes('.')){
            rating = rating + '.0';
        }

        const checkRatingColor = (rating) => {
            if(rating < 7){
                return 'yellow';
            }
            else if(rating < 4){
                return 'red';
            }
            else{
                return 'green';
            }
        }
    
    

    return(
        <div>
            <svg width="60" height="60" classes={classes.svg}>
            <circle cx="30" cy="30" r="25" stroke={checkRatingColor(props.rating)} strokeWidth="3" fill="#141d21" fillOpacity="0.5" />
            <text fill="#ffffff" fontSize="15" fontFamily="Verdana" x="30%" y="60%">{rating}</text>
            </svg>
        </div>
        
    )
    
}

export default RatingCircle;