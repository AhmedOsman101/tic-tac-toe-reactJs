/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Board from "./Board";
import XElement from "./XElement";

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

	const handleCellClick = (index) => {
		if (cells[index] !== null || winner) return;
		let newCells = [...cells];
		newCells[index] = circleTurn ? "o" : "x";
		circleTurn ? oLocations.push(index) : xLocations.push(index);
		setCells(newCells);
		setCircleTurn(!circleTurn);
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
				return "x";
			} else if (combo.every((index) => oLocations.includes(index))) {
				return "o";
			}
		}
		return null;
	};

	useEffect(() => {
		const winner = checkWinner();
		if (winner) {
			setWinner(winner);
			console.log(winner, " won!");
		} else checkDraw();
	}, [cells]);

	return (
		<>
			<div className="title">
				<h1>Tic Tac Toe</h1>
				<h2 id="displayScore"></h2>
				<h3 id="playerTurn">
					Player&apos;S <XElement /> turn
				</h3>
			</div>
			<Board
				cells={cells}
				circleTurn={circleTurn}
				onCellClick={handleCellClick}
			/>
		</>
	);
};
export default Game;
