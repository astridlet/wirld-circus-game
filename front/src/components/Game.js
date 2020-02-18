import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
    color: {
      borderColor: '#B22222',
      color: '#B22222',
      alignItems: 'center',
    },
  })

class Game extends Component {
    render () {

        const { classes } = this.props

        return(
            <div className="game-container">
            <li><img src={this.props.image_url} /></li>
            <li><h2>{this.props.title}</h2></li>
            <li><p>{this.props.description}</p></li>
            <li><Button variant="outlined" className={classes.color}>Jouez maintenant</Button></li>
            </div>
        )
    }
}

export default withStyles(styles)(Game);