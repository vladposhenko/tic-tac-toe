import React, {Component} from 'react';
import Square from "../Square/Square";
import {calculateWinner} from "../../utils";

class Board extends Component {

    state = {
        squares: Array(9).fill(null),
        xIsNext:true
    }


    renderSquare(i) {
        return <Square value={this.props.squares[i]}
                        onClick={() => this.props.onClick(i)}
        />;
    }

    render() {

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;