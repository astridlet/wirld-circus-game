import React, {Component} from 'react';

class Game extends Component {
    render () {
        return(
            <div className="game-container">
            <li><img src={this.props.image_url} /></li>
            <li><h1>{this.props.title}</h1></li>
            <li><p>{this.props.description}</p></li>
            </div>
        )
    }
}

export default Game;