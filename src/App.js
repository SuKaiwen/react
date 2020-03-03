import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component{
    constructor(){
        super()
        this.state = {
            tictacboard:["", "", "", "", "", "", "", "", ""],
            player_turn: "X",
            winner: 0,
            message: "",
            moves: 1
        }

        this.squareClicked = this.squareClicked.bind(this)
    }

    reset(){
        this.setState({
            tictacboard:["", "", "", "", "", "", "", "", ""],
            player_turn: "X",
            winner: 0,
            message: "",
            moves: 1
        })
    }

    squareClicked(index){
        // If statement ensures the game stops once a winner is determined.
        if(this.state.winner === 0){
            let player_turn = this.state.player_turn
            let tictacboard = this.state.tictacboard
            let winner = this.state.winner
            let message = this.state.message
            let moves = this.state.moves

            //Update the board with new X or O.
            //Ensure player cannot choose a square that has already been chosen.
            if(tictacboard[index] === ""){
                moves = moves + 1;
                tictacboard[index] = player_turn;

                //Check winning combinations.
                let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
                for(let i = 0; i < win.length; i++){
                    let combination = win[i]
                    if(tictacboard[combination[0]] === tictacboard[combination[1]] && tictacboard[combination[1]] === tictacboard[combination[2]] && tictacboard[combination[0]] !== ""){
                        winner = 1;
                        if(tictacboard[combination[0]] === "O"){
                            message = "Winner: O in move number " + this.state.moves;
                        }else{
                            message = "Winner: X in move number " + this.state.moves;
                        }
                    }
                }

                // Max moves and no winner therefore tie!
                if(moves > 9 && winner === 0){
                    message = "Tie!";
                    winner = 1;
                }

                //Alternate the player turns.
                player_turn = (player_turn === "X") ? "O": "X";

                this.setState({
                    player_turn: player_turn,
                    tictacboard: tictacboard,
                    winner: winner,
                    message: message,
                    moves: moves
                })
            }
        }
    }

    render(){
        return (
            <div className="App">
              <div style={{display:'flex', margin:'auto', justifyContent:'center', backgroundColor:'#3F2C7F'}}>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}>Kevin Su</h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/TicTacToe'} style={{ color: 'white'}}>Tic-Tac-Toe</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Connect4'} style={{ color: 'white'}}>Connect-4</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Calculator'} style={{ color: 'white'}}>Calculator</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Sorter'} style={{ color: 'white'}}>Sorter</Link></h4>
              </div>
              <header className="App-header">
                <h1 style={{color: 'green'}}>Tic-Tac-Toe</h1>
                <div className="tictacgrid">
                    {this.state.tictacboard.map((tictacsquare, index)=>{
                        return(<div onClick={()=>this.squareClicked(index)} className="tictacsquare"><h1>{tictacsquare}</h1></div>)
                    })}
                </div>
                <h4>{this.state.message}</h4>
                <button onClick={()=>this.reset()} className="button">Reset</button>
              </header>
            </div>
        );
    }
}

export default App;
