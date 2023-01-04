import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => (
    <div className="board">
        {squares.map((square, i)=> (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        
        ))}
    </div>
)
//mapping over each square and passing the square
//into the square component along with the index
export default Board