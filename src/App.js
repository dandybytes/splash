import React, {useState} from "react";
import Logo from "./components/Logo";
import Splatter from "./components/Splatter";
import Message from "./components/Message";
import Status from "./components/Status";
import Board from "./components/Board";
import Controls from "./components/Controls";
import {gameColors} from "./data/settings";
import "./App.css";

function App() {
    const chooseRandomColor = () => gameColors[Math.floor(Math.random() * gameColors.length)];
    const generateRandomBoard = () => Array.from({length: 15 * 15}, () => chooseRandomColor());

    let [gameBoard, setGameBoard] = useState(generateRandomBoard());

    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <Message />
                <Splatter />
                {/* <Status /> */}
            </header>
            <main className="App-main">
                <Board colors={gameBoard} />
                <Controls />
            </main>
        </div>
    );
}

export default App;
