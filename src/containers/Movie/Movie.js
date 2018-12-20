import React,{Component} from 'react';
import axios from 'axios';
import classes from './Movie.module.scss';


class Movie extends React.Component {

    state = {
        movie: {
            genres: [],
            credits: {
                cast: [],
                crew: []
            },
            production_companies: [],
            videos: {
                results: []
            }
        }
    }

    

    getDataApi = () =>{
        const apiKey = '30bef07fcafe04cd96cf1b120d33cfe0';
        const movie_id = window.location.pathname.substring(7);

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits`)
        .then(response => {
            this.setState({
                movie: response.data
            });
            this.props.myCallback(this.state.movie.backdrop_path);
        })
        .catch(error => {
            console.log('Fetch Error', error);
        })

        
    }

    componentDidMount(){
        this.getDataApi();
    }


    someFn = () => {
        let background = this.state.movie.backdrop_path;
        this.props.callbackFromParent(background);
    };
    



    render(){

        const movie = this.state.movie;
        
        
        return(
            
            <div className={classes.Movie}>
                <div className={classes.cover}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="cover" />
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
                            <div className={classes.runningTime}>
                                <p>Running Time: </p>
                                <span>{movie.runtime} mins</span>
                            </div>
                        </div>
                        <div className={classes.wrapperTwo}>
                            <div className={classes.budget}>
                                <p>Budget: </p>
                                <span>
                                    {!(movie.budget === null) ? '-' : movie.budget}
                                </span>
                            </div>
                            <div className={classes.averageVote}>
                                <p>Vote Average: </p>
                                <span>{movie.vote_average}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            
        )
    }
}

export default Movie;
