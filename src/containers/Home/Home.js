import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form';
import NewMovies from '../../containers/NewMovies/NewMovies';



class Home extends Component {

    state = {
        renderNewestMoviesDone: false
      }
    
      renderDone = () => {
        this.setState({
          renderNewestMoviesDone: !false
        })
      }

    render(){
        return(
            <>
            {this.state.renderNewestMoviesDone === true ? <Form/> : null}
            <NewMovies renderDone={this.renderDone}/>
            </>
        )
    }
    
}

export default Home;