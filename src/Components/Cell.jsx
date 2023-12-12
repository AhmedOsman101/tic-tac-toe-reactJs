/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import XElement from "./XElement";
import OElement from "./OElement";
const Cell = ({ value, onClick }) => {
	// function handleClick(e) {
	// 	const empty = cells[current] === null ? true : false;
	// 	if (empty) {
	// 		changeCell(circleTurn);
	// 		setCircleTurn(!circleTurn);
	// 	}
	// }
	// function changeCell(value) {
	// 	{
	// 		return value == "x" ? <XElement /> : <OElement />;
	// 	}
	// }

	return (
		<>
			<div className="square" onClick={onClick}>
				<span className={`fa-${value}`}></span>
			</div>
		</>
	);
};
export default Cell;
