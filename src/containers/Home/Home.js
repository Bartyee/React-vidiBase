import React from 'react';
import NewMovies from '../NewMovies/NewMovies';
import Form from '../../components/Form/Form';
import classes from './Home.module.scss';

class Home extends React.Component{
    render(){
        return(
            <div className={classes.wrapperAdditionalHome}>
                <Form />
                <NewMovies />
            </div>
        )
    }
}

export default Home;