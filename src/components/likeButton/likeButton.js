import React, { Component } from 'react'
import classNames from 'classnames';
import Radium, {StyleRoot} from 'radium';
import heart from '../../assets/heart.png';
import heartHover from '../../assets/heartHover.png';


class likeButton extends Component {

    state = {
        isPressed: false,
        isHovered: false,
        mainStyle: {
            position: 'absolute',
            top: 25,
            left: 0,
            
            ':hover': {
                cursor: 'pointer'
              },
        },
        imgStyle: {
            heart: heart,
            heartHover: heartHover,
            imgUse: heart,
            width: 40,
            height: 40
        }
    }

  render() {

    let btnClass = classNames({
        btn: true,
        'btn-pressed': this.state.isPressed,
        'btn-hovered': this.state.isHovered
    })

    const handleClick = () =>{ //edit zrobic
        if(this.state.isPressed === false){
            this.setState({
                isPressed: true,
                imgStyle: {
                    ...this.state.imgStyle,
                    imgUse: heartHover
                }
            })
        }
        else{
            this.setState({
                isPressed: false,
                imgStyle: {
                    ...this.state.imgStyle,
                    imgUse: heart
                }
            })
        }
    }


    
    return (
        
            <div className={btnClass} onClick={handleClick} style={this.state.mainStyle} key="1">
                <img src={this.state.imgStyle.imgUse} style={this.state.imgStyle} alt="LIKE" key="2"/>
            </div>
       
        
    )
  }
}

export default Radium(likeButton);