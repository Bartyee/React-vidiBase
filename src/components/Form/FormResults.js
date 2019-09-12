import React from 'react';
import {Link} from 'react-router-dom';

class FormResults extends React.Component {

  handleClick = () => {
    document.querySelector('#results').className = 'noDisplay';
    document.querySelector('#searchInput').value = '';
  }

  render() {
    const link = 'https://image.tmdb.org/t/p/w300';
    return(
      <ul id="results" onClick={this.handleClick}>
        {this.props.results.map((element, index) => {
          return(
            <li key={index} onClick={this.handleClick}>
              <Link to={`/movie/${this.props.results[index].id}`} >
                <img src={this.props.results[index].poster_path === null ? 'https://via.placeholder.com/300x450' : `${link}${this.props.results[index].poster_path}`} alt={`${this.props.results[index].title} poster`} className="resultPoster" />
                <div>
                  <p>{this.props.results[index].title}</p>
                  <span>{this.props.results[index].release_date}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default FormResults;