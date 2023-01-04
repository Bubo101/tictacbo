import React, {useState} from "react"
import Board from "./Board"
import { calculateWinner } from "../helper";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        const current = historyPoint[stepNumber]
        const squares = [...current]
        
        if (winner || suqares[i]) return;

        squares[i] = xO
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }
    return (
        <>
        <h1>React Tic Tac Toe - With Hooks</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
            
        </div>
        </>
    )
}