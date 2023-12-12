/* eslint-disable no-unused-vars */
import { useState } from "react";
import Board from "./Board";
// import XElement from "./XElement";
// import OElement from "./OElement";

const XElement = `<span className="fa-x"></span>`;
const OElement = `<span className="fa-o"></span>`;

const Game = () => {
	const [cells, setCells] = useState(Array(9).fill(null));
	const [circleTurn, setCircleTurn] = useState(false);

	const handleCellClick = (index) => {
		// console.log(index);
		if (cells[index] !== null) return;
		let newCells = [...cells];
		newCells[index] = circleTurn ? "o" : "x";
		setCells(newCells);
		setCircleTurn(!circleTurn);
		console.log(circleTurn);
		console.table(cells);
	};

	return (
		<>
			<div className="title">
				<h1>Tic Tac Toe</h1>
				<h2 id="displayScore"></h2>
				<h3 id="playerTurn"></h3>
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
