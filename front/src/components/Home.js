import React, { Component } from 'react';
import Game from './Game';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from './Navigation/AppBar';

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
            <AppBar />
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