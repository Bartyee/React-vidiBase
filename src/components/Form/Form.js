import React from 'react';
import FormResults from './FormResults';
import icon from '../../assets/magnifier.svg';
import classes from './Form.module.scss';

class Form extends React.Component {
    
    state = {
      results: []
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
    }
  
    handleKeyUp = () => {
      document.getElementById('results').className = 'formResults';
      let val = document.querySelector('#searchInput').value;
  
      if(val === ''){
        document.querySelector('#results').style.display = 'none';
      }
      else{
      const key = '30bef07fcafe04cd96cf1b120d33cfe0';
      document.querySelector('#results').style.display = 'block';
  
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
        .then(response => {
          if(response.status !== 200) {
            console.log('Error: ' + response.status);
            return;
          }
          response.json().then(data => {
            const results = data.results.slice(1,13); // Length so long, must slice to display on site.
            this.setState({ results });
          });
        })
        .catch(err => {
          console.log('Fetch Error :-S', err);
        })
      }
    }

    render() {
      return(
        <form onSubmit={this.handleSubmit} className={classes.Form}>
          <div className={classes.iconWrap}>
              <img alt="iconSearch" src={icon} className={classes.icon} />
          </div>
          <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
          <FormResults results={this.state.results} />
        </form>
      );
    }
  }
  

export default Form;