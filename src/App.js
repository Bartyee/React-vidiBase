import React, { Component } from 'react';
import classes from './App.css';
import Movie from './containers/Movie/Movie';
import Header from './components/Header/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';

class App extends Component {
  
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
          <Route
              path={"/movie/:id"} component={Movie}/>
          <Route path={"/"} exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
