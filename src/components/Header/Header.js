import React from 'react';
import classes from './Header.module.scss';
import mainIcon from '../../assets/play-button.svg';
import hamburgerIcon from '../../assets/list-menu.svg';
import {Link} from 'react-router-dom';


const Header = (props) => {
    return(
        <div className={classes.Header}>
            <div className={classes.logo}>
                <img src={mainIcon} alt="logoImg"/>
                <a href={`/`}>
                    <p>vidiBase</p>
                </a>
            </div>
            <nav className={classes.nav}>
                <button className={classes.hamburgerMenu}>
                    <img src={hamburgerIcon} alt="hambIcon" />
                </button>
                <ul className={classes.list}>
                    <li className={classes.item}><a href="/">Favourites</a></li>
                    <li className={classes.item}><a href="/">Github</a></li>
                    <li className={classes.item}><a href="/">MoviesDB Api</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;