/* eslint-disable react/prop-types */
import GameStats from "./GameStats";
import XElement from "./XElement";
import OElement from "./OElement";

export default function GameOver({ gameStats }) {
	switch (gameStats) {
		case GameStats.inProgress:
			return <></>;
		case GameStats.XWon:
			GameStats.XWon = false;
			return (
				<>
					<div id="select-game-mode">
						<div id="winningMessage">
							Player <XElement /> Won!
						</div>
					</div>
				</>
			);
		case GameStats.OWon:
			GameStats.OWon = false;
			return (
				<>
					<div id="select-game-mode">
						<div id="winningMessage">
							Player <OElement /> Won!
						</div>
					</div>
				</>
			);
		case GameStats.isDraw:
			return (
				<>
					<div id="select-game-mode">
						<div id="winningMessage">It&apos;s a draw!</div>
					</div>
				</>
			);
		default:
			return <></>;
	}
}
