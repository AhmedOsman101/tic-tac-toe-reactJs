export default function GameMode() {
	return (
		<>
			<div className="btn-group" id="SGMBtns">
				<button>
					<span className="fa-desktop"></span>
					<h4>player vs computer</h4>
				</button>
				<button>
					<span className="fa-user"></span>
					<h4>player vs player</h4>
				</button>
				<button>
					<span className="fa-shuffle"></span>
					<h4>Random game</h4>
				</button>
			</div>
		</>
	);
}
