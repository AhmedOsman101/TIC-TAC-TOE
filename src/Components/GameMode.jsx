import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDesktop } from "@fortawesome/free-solid-svg-icons";
import Shuffle from "../Shuffle.svg";
import SelectSide from "./SelectSide";

export default function selectGameMode(props) {
	return (
		<>
			<div id="select-game-mode" className="show">
				<div id="winningMessage" className="show"></div>
				<div className="text-boxes">
					<h1>Select game mode</h1>
				</div>
				<div className="btn-group show" id="SGMBtns">
					<button className="reset computer" data-opponent="computer">
						<FontAwesomeIcon icon={faDesktop} />
						<h4>player vs computer</h4>
					</button>
					<button className="reset human" data-opponent="human">
						<FontAwesomeIcon icon={faUser} />
						<h4>player vs player</h4>
					</button>
					<button className="reset random" data-opponent="random">
					<img src={Shuffle} alt="Shuffle Icon" />

						<h4>Random game</h4>
					</button>
				</div>
				<SelectSide />
			</div>
		</>
	);
}
