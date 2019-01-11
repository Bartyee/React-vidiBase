import React from 'react';
import classes from './Header.module.scss';
import mainIcon from '../../assets/play-button.svg';
import heartIcon from '../../assets/heart.png';
import githubIcon from '../../assets/github-logo.png';
import apiIcon from '../../assets/api.png';

const Header = (props) => {

    return(
        <div className={classes.Header}>
            <div className={classes.logo}>
                <img src={mainIcon} alt="logoImg"/>
                <a href={`/React-vidiBase/`}>
                    <p>vidiBase</p>
                </a>
            </div>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li className={classes.item}><a href="/">Favourites</a></li>
                    <li className={classes.item}><a href="https://github.com/Bartyee">Github</a></li>
                    <li className={classes.item}><a href="https://developers.themoviedb.org/">MoviesDB Api</a></li>
                </ul>
                <ul className={classes.additionalNav}>
                    <li className={`${classes.item}`}>
                        <img src={heartIcon} alt="fav" />
                    </li>
                    <li className={`${classes.item}`}>
                        <a href="https://github.com/Bartyee"><img src={githubIcon} alt="github"/></a>
                        
                    </li>
                    <li className={`${classes.item}`}>
                        <a href="https://developers.themoviedb.org/"><img src={apiIcon} alt="api"/></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;