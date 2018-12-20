import React, { Component } from 'react';
import classes from './App.css';
import Movie from './containers/Movie/Movie';
import Header from './components/Header/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';

class App extends Component {

  state= {
    background: null
  }

  myCallBack = datafromChild => {
    console.log(datafromChild);
    this.setState({
      background: datafromChild
    });
  };

  
  
  render() {

    let backgroundStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }

    return (
      <div className={classes.App} style={backgroundStyle}>
        <Header />
        <BrowserRouter>
          <Switch>
          <Route
              path={"/movie/:id"}
              render={props => {
                const callback = this.myCallBack;
                return (
                  <Movie
                    {...props}
                    myCallback={callback}
                    background={this.state.background}
                  />
                );
              }}
            />
            <Route path={'/'} exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
