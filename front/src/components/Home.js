import React, { Component } from 'react';
import Game from './Game';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    }
  }));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [] 
        }
    }

    fetchGames = () => {
        axios
            .get(`http://localhost:5000/api/games`)
            .then(res => {
                this.setState({
                    games: res.data
                })
            })
            .then(res => {     console.log(res.data);   }) 
            .catch(error => {
                this.setState({isError: true})
                console.log(error);
            })
    }

    componentDidMount() {
        this.fetchGames();
    }


    render() {

        const {games} = this.state;

        return (
            <>
            <h1>Sélectionnez un jeu</h1>
            <div className="gameList">
                {games.map((game,id) => (
                    <Game 
                    {...game}
                    key={id}
                    />
                ))
                }
            </div>
            </>
        );
    }
}

export default Home;