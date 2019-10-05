import React, {useState, useEffect} from "react";
import Logo from "./components/Logo";
import Splatter from "./components/Splatter";
import Message from "./components/Message";
import Status from "./components/Status";
import Board from "./components/Board";
import Controls from "./components/Controls";
import {gameColors, maxMoves} from "./data/settings";
import "./App.css";

function App() {
    const chooseRandomColor = () => gameColors[Math.floor(Math.random() * gameColors.length)];
    const generateRandomBoard = () => Array.from({length: 15 * 15}, () => chooseRandomColor());

    let [gameBoard, setGameBoard] = useState(generateRandomBoard());
    let [movesLeft, setMovesLeft] = useState(maxMoves);
    let [gameWon, setGameWon] = useState(false);

    const resetGame = () => {
        setGameBoard(generateRandomBoard());
        setMovesLeft(maxMoves);
    };

    const allSquaresSameColor = () => gameBoard.every(color => color === gameBoard[0]);

    useEffect(() => {
        if (allSquaresSameColor()) setGameWon(true);
    }, [movesLeft]);

    const splashColor = color => {
        console.log("splashing color: ", color);
        if (movesLeft > 0 && !gameWon) {
            setMovesLeft(movesLeft - 1);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <Message movesLeft={movesLeft > 0} />
                <Splatter resetGame={resetGame} movesLeft={movesLeft > 0} />
                <Status movesLeft={movesLeft} gameWon={gameWon} />
            </header>
            <main className="App-main">
                <Board colors={gameBoard} />
                <Controls splashColor={splashColor} />
            </main>
        </div>
    );
}

export default App;
