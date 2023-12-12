/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Cell from "./Cell";

const Board = ({ cells, circleTurn, onCellClick }) => {
	return (
		<>
			<div id="board">
				{cells.map((cell, index) => {
					return (
						<Cell
							key={index}
							value={cell}
							onClick={() => onCellClick(index)}
						/>
					);
				})}
				{/* {console.table(cells)} */}
			</div>
		</>
	);
};
export default Board;
