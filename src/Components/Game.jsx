/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Board from "./Board";
import XElement from "./XElement";
import OElement from "./OElement";
import GameOver from "./GameOver";
import GameStats from "./GameStats";

const winningCombos = [
	[0, 1, 2], // Top row
	[3, 4, 5], // Middle row
	[6, 7, 8], // Bottom row
	[0, 3, 6], // Left column
	[1, 4, 7], // Middle column
	[2, 5, 8], // Right column
	[0, 4, 8], // Main diagonal
	[2, 4, 6], // Counter diagonal
];

let xLocations = [];
let oLocations = [];

const Game = () => {
	const [cells, setCells] = useState(Array(9).fill(null));
	const [circleTurn, setCircleTurn] = useState(false);
	const [winner, setWinner] = useState(null);
	const [gameStats, setGameStats] = useState(GameStats.inProgress);

	const handleCellClick = (index) => {
		if (cells[index] !== null || winner) return;
		let newCells = [...cells];
		newCells[index] = circleTurn ? "o" : "x";
		circleTurn ? oLocations.push(index) : xLocations.push(index);
		setCells(newCells);
		setCircleTurn(!circleTurn);
	};

	const changeCell = (value) => {
		if (value == null) return <span className={`fa-${value}`}></span>;
		if (value == "x") return <XElement />;
		if (value == "o") return <OElement />;
	};

	const checkDraw = () => {
		if (xLocations.length + oLocations.length === 9 && winner === null) {
			console.log("It's a draw");
			return true;
		}
		return false;
	};

	const checkWinner = () => {
		for (const combo of winningCombos) {
			if (combo.every((index) => xLocations.includes(index))) {
				GameStats.XWon = true;
				GameStats.XScore++;
				GameStats.inProgress = false;
				return "x";
			} else if (combo.every((index) => oLocations.includes(index))) {
				GameStats.OWon = true;
				GameStats.OScore++;
				GameStats.inProgress = false;
				return "o";
			}
		}
		return null;
	};

	useEffect(() => {
		const winner = checkWinner();
		if (winner) setWinner(winner);
		else checkDraw();
	}, [cells]);

	return (
		<>
			<div className="title">
				<h1>Tic Tac Toe</h1>
				<h2 id="displayScore">
					{<XElement />}: {GameStats.XScore} -{<OElement />}:{" "}
					{GameStats.OScore}
				</h2>
				<h3 id="playerTurn">
					Player&apos;s {circleTurn ? <OElement /> : <XElement />}{" "}
					turn
				</h3>
			</div>
			<Board
				cells={cells}
				circleTurn={circleTurn}
				onCellClick={handleCellClick}
				changeCell={changeCell}
			/>
			<GameOver gameStats={gameStats} />
		</>
	);
};
export default Game;
