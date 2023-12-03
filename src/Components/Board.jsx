/* eslint-disable jsx-a11y/heading-has-content */

import React from "react";

export default function Board() {
	return (
		<>
			<div className="title">
				<h1>Tic Tac Toe</h1>
				<h2 id="displayScore"></h2>
				<h3 id="playerTurn"></h3>
			</div>
			<div id="board">
				<div className="square" data-current="0"></div>
				<div className="square" data-current="1"></div>
				<div className="square" data-current="2"></div>
				<div className="square" data-current="3"></div>
				<div className="square" data-current="4"></div>
				<div className="square" data-current="5"></div>
				<div className="square" data-current="6"></div>
				<div className="square" data-current="7"></div>
				<div className="square" data-current="8"></div>
			</div>
		</>
	);
}
