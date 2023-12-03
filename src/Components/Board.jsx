/* eslint-disable react/jsx-key */
import { useState } from "react";
import Cell from "./Cell";

const Board = () => {
	const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
	const [circleTurn, setCircleTurn] = useState(true);

	return (
		<>
			<div className="title">
				<h1>Tic Tac Toe</h1>
				<h2 id="displayScore"></h2>
				<h3 id="playerTurn"></h3>
			</div>
			<div id="board">
				{cells.map((cell, index) => {
					return (
						<Cell
							key={index}
							current={index}
							circleTurn={circleTurn}
							setCircleTurn={setCircleTurn}
							cells={cells}
							setCells={setCells}
						/>
					);
				})}
				{console.log(cells)}
			</div>
		</>
	);
};
export default Board;
