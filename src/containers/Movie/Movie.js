import React from 'react';
import axios from 'axios';
import classes from './Movie.module.scss';
import LikeButton from '../../components/likeButton/likeButton.js';

class Movie extends React.Component{

    state = {
        movie: {
            render: false,
            genres: [],
            credits: {
                cast: [],
                crew: []
            },
            production_companies: [],
            videos: {
                results: []
            },
            backdrop_path: null
        },
        favouriteArray: []
    }

    getDataApi = () =>{
        const apiKey = '30bef07fcafe04cd96cf1b120d33cfe0';
        const movie_id = window.location.pathname.substring(7); // 7 for react, 22 git

        axios.get(`http://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits`)
        .then(response => {
            this.setState({
                movie: response.data,
                render: true
            });
        })
        .catch(error => {
            console.log('Fetch Error', error);
        })
    }

    componentDidMount(){
        this.getDataApi();
    }

    render(){
        const movie = this.state.movie;
        const budgetToString = `${movie.revenue}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        
        let backgroundStyle = {
            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,1)), url(${movie.backdrop_path && 'https://image.tmdb.org/t/p/original' + movie.backdrop_path }) no-repeat fixed center `,
        }

        
        return(
            <div className={classes.Movie}>
                <div className={classes.backgroundAbsolute} style={backgroundStyle}>
                    <div className={classes.additionalGradient}></div>
                </div>
                <div className={classes.wrapper}>
                    <div className={classes.cover}>
                    {(
                        movie.poster_path && (
                            <React.Fragment>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="cover" />
                                <LikeButton />
                            </React.Fragment>
                        )
                        )}
                    </div>
                <div className={classes.details}>
                    <h1 className={classes.movieTitle}>{movie.original_title}</h1>
                    <h2 className={classes.movieTagLine}>{movie.tagline}</h2>
                    <p className={classes.movieOverview}>{movie.overview}</p>
                    <div className={classes.genresList}>
                        <span className={classes.genreItem}>
                            {movie.genres.map((genre, index) => {
                                if(movie.genres.length === index+1){
                                    return genre.name;
                                }
                                else{
                                    return genre.name + ", ";
                                }
                            })}
                        </span>
                    </div>
                    <div className={classes.companyNames}>
                        {movie.production_companies.map((company,index) => {
                            if(movie.production_companies === index+1){
                                    return company.name;
                                }
                                else{
                                    return company.name + ", ";
                                }
                            })}
                    </div>
                    <div className={classes.additionalDetails}>
                        <div className={classes.wrapperOne}>
                            <div className={classes.releaseDate}>
                                <p>Original Release: </p>
                                <span>{movie.release_date}</span>
                            </div>
                            <div className={classes.budget}>
                                <p>Budget: </p>
                                <span>{budgetToString === "0" ? "-" : '$' + budgetToString}</span>
                            </div>
                        </div>
                        <div className={classes.wrapperTwo}>
                            <div className={classes.runningTeam}>
                                <p>Running Time: </p>
                                <span>{movie.runtime} mins</span>
                            </div>
                            <div className={classes.avarageVote}>
                                <p>Vote Average: </p>
                                <span>{movie.vote_average}/10</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={classes.trailers}>
                    {movie.videos.results.map((item,index) => {
                        if(index===3){
                            return index;
                        }
                        return(
                            <div className={classes.trailerItem} key={index}>
                            <iframe title={index} width="420" height="315" src={`https://www.youtube.com/embed/${item.key}`}></iframe>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Movie;
