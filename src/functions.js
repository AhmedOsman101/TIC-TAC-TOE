import { v } from "./main";
export const StartFirstGame = () => {
	if (v.isFirstGame) {
		v.isFirstGame = false;
		v.SGM.classList.replace("hide", "show");
		initGame();
	} else {
		GameVsPlayer();
	}
};

const GameVsPlayer = () => {
	v.SGM.classList.replace("show", "hide");
	resetFunc();
};

const clicking = (e) => {
	const currentSquare = e.target;
	currentSquare.innerHTML = !v.circleTurn ? v.XElement : v.OElement;
	const currentData = getCurrentData(e);
	(!v.circleTurn ? v.xLocations : v.circleLocations).push(currentData);
	swapTurns();
	displayTurns();
	checkWinner();
};

const initGame = () => {
	displayTurns();
	v.randomNumber = Math.floor(Math.random() * 3);
	initBtns();
	// gameReset.classList.add("hide");
	v.squares.forEach((square) => {
		square.innerHTML = "";
		square.addEventListener("click", clicking, { once: true });
	});
};

const resetFunc = () => {
	v.circleTurn = false;
	v.isDraw = false;
	v.xLocations = [];
	v.circleLocations = [];
	initGame();
	v.gameReset.classList.replace("hide", "show");
};

const initBtns = () => {
	v.resetBtns.forEach((resetBtn) => {
		if (resetBtn.classList.contains("human")) {
			resetBtn.addEventListener("click", resetFunc);
			resetBtn.addEventListener("click", StartFirstGame);
		} else if (resetBtn.getAttribute("data-opponent") === "computer") {
			// resetBtn.addEventListener("click", resetFunc);
			resetBtn.addEventListener("click", GameVsComputer);
		} else if (resetBtn.getAttribute("data-opponent") === "random") {
			// resetBtn.addEventListener("click", resetFunc);
			resetBtn.addEventListener("click", RandomGame);
		}
	});
};

const GameVsComputer = () => {
	v.SGMBtns.classList.replace("show", "hide");
	v.selectSide.classList.replace("hide", "show");
	// initGame();
};

const RandomGame = () => {
	console.log("Random Game");
	v.randomNumber = Math.floor(Math.random() * 3);
	console.log(v.randomNumber);
	v.resetBtns[v.randomNumber].click();
};

function displayTurns() {
	v.playerTurn.innerHTML = `Player ${
		!v.circleTurn ? v.XElement : v.OElement
	}'S turn`;
	v.displayScore.innerHTML = `${v.XElement}: ${v.playerXscore} - ${v.playerOscore} :${v.OElement}`;
}

const swapTurns = () => (v.circleTurn = !v.circleTurn);

const getCurrentData = (e) => Number(e.target.getAttribute("data-current"));

const checkWinner = () => {
	for (const combo of v.winningCombos) {
		if (combo.every((index) => v.xLocations.includes(index))) {
			v.playerXscore++;
			displayTurns();
			setTimeout(showEndMessage, 100, v.XElement);
			return;
		} else if (combo.every((index) => v.circleLocations.includes(index))) {
			v.playerOscore++;
			displayTurns();
			setTimeout(showEndMessage, 100, v.OElement);
			return;
		}
	}
	checkDraw();
};

const checkDraw = () => {
	if (v.xLocations.length + v.circleLocations.length === 9) {
		v.isDraw = true;
		v.playerXscore += 0.5;
		v.playerOscore += 0.5;
		displayTurns();
		setTimeout(showEndMessage, 100, "It's a draw!");
	}
};

const showEndMessage = (winner) => {
	v.SGM.classList.replace("hide", "show");
	v.winningMessage.classList.replace("hide", "show");
	v.winningMessage.innerHTML = v.isDraw ? winner : `Player ${winner} won!`;
};
