import React from 'react';
import classes from './Form.module.scss';
import formIcon from '../../assets/magnifier.svg';

const Form = (props) => {
    return(
        <form className={classes.Form}>
            <div className={classes.iconWrap}>
                <img src={formIcon}  className={classes.icon} alt="img" />
            </div>
            <input type="text" placeholder="Search a movie"/>
        </form>
    )
}

export default Form;