/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Cell = ({ current, circleTurn, setCircleTurn, cells, setCells }) => {
	const XElement = `<span class="fa-x"></span>`;
	const OElement = `<span class="fa-o"></span>`;
	function handleClick(e) {
		const empty = cells[current] == "" ? true : false;
		if (empty) {
			changeCell(circleTurn);
			setCircleTurn(!circleTurn);
		}
	}
	function changeCell(circleTurn) {
		let CCells = [...cells];
		CCells[current] = circleTurn ? "O" : "X";
		setCells(CCells);
	}

	return (
		<>
			<div
				className="square"
				data-current={current}
				onClick={handleClick}
			></div>
		</>
	);
};
export default Cell;
