/* eslint-disable no-unused-vars */
// Import the necessary dependencies for state management
import React, { useState } from "react";
import Shuffle from "../Shuffle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDesktop } from "@fortawesome/free-solid-svg-icons";

export default function BoardGameMode() {
	// Use state to manage the opponent value
	const [opponent, setOpponent] = useState("");

	const handleOpponentSelection = (selectedOpponent) => {
		setOpponent(selectedOpponent);
	};

	return (
		<>
			<div className="main-btn hide">
				<div className="btn-group">
					<button
						className="reset computer"
						onClick={() => handleOpponentSelection("computer")}
					>
						<FontAwesomeIcon icon={faDesktop} />
						<h4>player vs computer</h4>
					</button>
					<button
						className="reset human"
						onClick={() => handleOpponentSelection("human")}
					>
						<FontAwesomeIcon icon={faUser} />
						<h4>player vs player</h4>
					</button>
					<button
						className="reset random"
						onClick={() => handleOpponentSelection("random")}
					>
						<h4>Random game</h4>
						<img src={Shuffle} alt="Shuffle Icon" />
					</button>
				</div>
			</div>
		</>
	);
}
