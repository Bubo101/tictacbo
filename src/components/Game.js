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
        
        if (winner || squares[i]) return;

        squares[i] = xO
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }
    const jumpTo = (step) => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)

    }

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}`:"Go to Start"
            return (
                <li key={move}>
                    <button onClick={()=> jumpTo(move)}>
                        {destination}
                    </button>
                </li>
            )
        })
    return (
        <>
        <h1>Tic Tac Toe</h1>
        <h2>Created with React Hooks & Deployed with AWS</h2>
        <h4>by Boden Bradley - Software Developer</h4>

        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
            <div>
            <h3>History</h3>
            {renderMoves()}
            </div>
            <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
        <h5>With help from codeSTACKr youtube tutorial</h5>
        </>
    )
}

export default Game