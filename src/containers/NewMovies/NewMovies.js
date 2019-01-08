import React from 'react';
import axios from 'axios';
import classes from './NewMovies.module.scss';
import blankImage from '../../assets/No_image.jpg';
import RatingCircle from '../../components/RatingCircle/RatingCircle';
import { Link } from 'react-router-dom';

class NewMovies extends React.Component { 
    state = {
        movies: [],
        defaultImageSize: {
            width: 300,
            height: 453.5
        }
    }

    componentDidMount(){
        const apiKey = '30bef07fcafe04cd96cf1b120d33cfe0';
        let date = new Date();
        let today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        let monthAgo = (date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()) + '-' + (date.getMonth() === 0 ? date.getMonth() + 12 : date.getMonth()) + '-' + date.getDate(); 

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_date.gte=${monthAgo}&primary_release_date.lte=${today}`)
            .then(response =>{
                const data = response.data;
                const updatedData = Object.values(data)[3]; // in array number 3, we have all movies list
                this.setState({movies: updatedData})
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        const movies = this.state.movies;

        const moviesList = movies.map((item,index) =>{
            return(
                <div className={classes.movie} key={index}>
                    <Link to={`/movie/` + movies[index].id}>
                        <img src={item.poster_path === null ? `${blankImage}` : 'https://image.tmdb.org/t/p/w300/' + item.poster_path} alt="movieImg" />
                        <div className={classes.movieInfo}>
                            <RatingCircle rating={item.vote_average.toString()}/>
                            <p className={classes.title}>{item.title}</p>
                            <span className={classes.release_date}>{item.release_date}</span>
                        </div>
                    </Link>
                </div>
            ) 
        })
        return(
            <div className={classes.wrapper}>
                <h1 className={classes.headerText}>Latest Movies</h1>
                <div className={classes.NewMovies}>
                    {moviesList}
                </div>
            </div>
        )
    }
}

export default NewMovies;

