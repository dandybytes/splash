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
        setGameWon(false);
    };

    const allSquaresSameColor = () => gameBoard.every(color => color === gameBoard[0]);

    useEffect(() => {
        if (allSquaresSameColor()) setGameWon(true);
        // eslint-disable-next-line
    }, [movesLeft]);

    const handleColorButtonClick = newColor => {
        // handle click only if game not yet won and moves still available
        if (movesLeft > 0 && !gameWon) {
            // clone gameBoard to prevent affecting the original array
            let colorArr = [...gameBoard];
            const oldColor = colorArr[0];

            // use cache Set to prevent redundant operations in recursion
            const colorIndexCache = new Set();
            // paint given index to new color and spread to available adjacent cells
            const splashColor = colorIndex => {
                // if cell of specified index already in cache, prevent redundant operation
                if (colorIndexCache.has(colorIndex)) {
                    return colorArr;
                } else {
                    colorIndexCache.add(colorIndex);

                    if (colorArr[colorIndex] === oldColor) {
                        colorArr[colorIndex] = newColor;
                        const nextSplashWave = [];
                        // if current cell not in first row, add cell above it to splash wave
                        if (colorIndex > 14) nextSplashWave.push(colorIndex - 15);
                        // if current cell not in last row, add cell below it to splash wave
                        if (colorIndex < 15 * 14) nextSplashWave.push(colorIndex + 15);
                        // if current cell not in first column, add cell to its left to splash wave
                        if (colorIndex % 15 !== 0) nextSplashWave.push(colorIndex - 1);
                        // if current cell not in last column, add cell to its right to splash wave
                        if (colorIndex % 15 !== 14) nextSplashWave.push(colorIndex + 1);
                        nextSplashWave.forEach(ind => splashColor(ind));
                    }

                    return colorArr;
                }
            };

            colorArr = splashColor(0);
            setGameBoard(colorArr);
            setMovesLeft(movesLeft - 1);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <Message movesLeft={movesLeft > 0} gameWon={gameWon} />
                <Splatter resetGame={resetGame} movesLeft={movesLeft > 0} />
                <Status movesLeft={movesLeft} gameWon={gameWon} />
            </header>
            <main className="App-main">
                <Board colors={gameBoard} />
                <Controls handleColorButtonClick={handleColorButtonClick} />
            </main>
        </div>
    );
}

export default App;
