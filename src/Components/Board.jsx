/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Cell from "./Cell";

const Board = ({ cells, onCellClick, changeCell }) => {
	return (
		<>
			<div id="board">
				{cells.map((cell, index) => {
					return (
						<Cell
							key={index}
							value={cell}
							onClick={() => onCellClick(index)}
							changeCell={changeCell}
						/>
					);
				})}
			</div>
		</>
	);
};
export default Board;
