import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Connect4 extends Component{
    constructor(){
        super()
        this.state = {
            connect4board:[],
            player_turn: "X",
            winner: 0,
            message: "",
            moves: 1
        }
    }

    squareClicked(index){
        // If statement ensures the game stops once a winner is determined.
        if(this.state.winner === 0){
            let player_turn = this.state.player_turn
            let connect4board = this.state.connect4board
            let winner = this.state.winner
            let message = this.state.message
            let moves = this.state.moves

            // Columns and their indices
            let col1 = [0, 7, 14, 21, 28, 35]
            let col2 = [1, 8, 15, 22, 29, 36]
            let col3 = [2, 9, 16, 23, 30, 37]
            let col4 = [3, 10, 17, 24, 31, 38]
            let col5 = [4, 11, 18, 25, 32, 39]
            let col6 = [5, 12, 19, 26, 33, 40]
            let col7 = [6, 13, 20, 27, 34, 41]

            let targetCol = []

            // Find which column the player selected.
            if(index % 7 === 0){
                targetCol = col1;
            }else if(index % 7 === 1){
                targetCol = col2;
            }else if(index % 7 === 2){
                targetCol = col3;
            }else if(index % 7 === 3){
                targetCol = col4;
            }else if(index % 7 === 4){
                targetCol = col5;
            }else if(index % 7 === 5){
                targetCol = col6;
            }else{
                targetCol = col7;
            }

            // Fill the squares from the bottom up.
            let i = 5
            while(i >= 0){
                if(connect4board[targetCol[i]] === ""){
                    connect4board[targetCol[i]] = player_turn;

                    //Alternate player turns.
                    player_turn = (player_turn === "X") ? "O": "X";
                    moves = moves + 1;
                    break;
                }
                i = i - 1;
            }

            // Checks vertical wins.
            for(let i = 0; i < 21; i++){
                let win = [i, i+7, i+14, i+21]
                if(connect4board[win[0]] === connect4board[win[1]] && connect4board[win[2]] === connect4board[win[3]] && connect4board[win[0]] === connect4board[win[2]] &&
                connect4board[win[0]] !== ""){
                    winner = 1;
                    if(connect4board[win[0]] === "O"){
                        message = "Winner: Red in move number " + this.state.moves;
                    }else{
                        message = "Winner: Yellow in move number " + this.state.moves;
                    }
                }
            }

            // Checks horizontal wins.
            for(let i = 0; i < 4; i++){
                for(let j = 0; j < 6; j++){
                    if(connect4board[i + j*7] === connect4board[i+1 + j*7] && connect4board[i+2 + j*7] === connect4board[i+3 + j*7]
                    && connect4board[i + j*7] === connect4board[i+2 + j*7] && connect4board[i + j*7] !== ""){
                        winner = 1;
                        if(connect4board[i + j*7] === "O"){
                            message = "Winner: Red in move number " + this.state.moves;
                        }else{
                            message = "Winner: Yellow in move number " + this.state.moves;
                        }
                    }
                }
            }

            // Checks diagonals descending left to right.
            for(let i = 0; i < 4; i++){
                for(let j = 0; j < 3; j++){
                    if(connect4board[i + j*7] === connect4board[i + j*7 + 8] && connect4board[i + j*7 + 16] === connect4board[i + j*7 + 24]
                    && connect4board[i + j*7] === connect4board[i + j*7 + 16] && connect4board[i + j*7] !== ""){
                        winner = 1;
                        if(connect4board[i + j*7] === "O"){
                            message = "Winner: Red in move number " + this.state.moves;
                        }else{
                            message = "Winner: Yellow in move number " + this.state.moves;
                        }
                    }
                }
            }

            // Checks diagonals ascending left to right.
            for(let i = 3; i < 7; i++){
                for(let j = 0; j < 3; j++){
                    if(connect4board[i + j*7] === connect4board[i + j*7 + 6] && connect4board[i + j*7 + 12] === connect4board[i + j*7 + 18]
                    && connect4board[i + j*7] === connect4board[i + j*7 + 12] && connect4board[i + j*7] !== ""){
                        winner = 1;
                        if(connect4board[i + j*7] === "O"){
                            message = "Winner: Red in move number " + this.state.moves;
                        }else{
                            message = "Winner: Yellow in move number " + this.state.moves;
                        }
                    }
                }
            }

            // Max moves and no winner therefore must be a tie!
            if(moves === 43 && winner === 0){
                winner = 1;
                message = "Tie!"
            }

            this.setState({
                player_turn: player_turn,
                connect4board: connect4board,
                winner: winner,
                message: message,
                moves: moves
            })
        }
    }

    reset(){
        this.setState({
            connect4board:[],
            player_turn: "X",
            winner: 0,
            message: "",
            moves: 1
        })

        this.createBoard();
    }

    createBoard(){
        let connect4board = [];

        // 6 Rows and 7 Cols.
        for(let i = 0; i < 42; i++){
            connect4board.push("");
        }

        this.setState({
            connect4board:connect4board
        })
    }

    componentWillMount() {
        this.createBoard();
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
                <div style={{display:'flex'}}>
                    <h1 style={{color:'yellow'}}>Connect </h1>
                    <h1>-</h1>
                    <h1 style={{color:'red'}}>4 </h1>
                </div>
                <div className="connect4grid">
                    {this.state.connect4board.map((connect4square, index)=>{
                        return(<div onClick={()=>this.squareClicked(index)} className={this.state.connect4board[index] === "" ? 'connect4square' :
                        this.state.connect4board[index] === "X" ? 'connect4squareX' : 'connect4squareO'}><h3></h3></div>)
                    })}
                </div>
                <h4>{this.state.message}</h4>
                <button onClick={()=>this.reset()} className="button">Reset</button>
              </header>
            </div>
        );
    }
}

export default Connect4;
