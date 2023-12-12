/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Cell = ({ value, onClick, changeCell }) => {
	return (
		<>
			<div className="square" onClick={onClick}>
				{changeCell(value)}
			</div>
		</>
	);
};
export default Cell;
