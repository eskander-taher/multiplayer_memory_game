class MemoryGame {
	constructor() {
		this.gridSize = 25;
		this.level = 1;
		this.correctSquares = [];
		this.clickedSquares = [];
		this.gameState = "waiting"; // 'waiting', 'playing', 'won', 'lost'
		this.showBlackSquares = false;
	}

	startGame() {
		this.correctSquares = this.generateRandomSquares();
		this.clickedSquares = [];
		this.showBlackSquares = true;
		this.gameState = "playing";
	}

	generateRandomSquares() {
		const squares = new Set();
		while (squares.size < this.level) {
			squares.add(Math.floor(Math.random() * this.gridSize));
		}
		return Array.from(squares);
	}

	hideSquares() {
		this.showBlackSquares = false;
	}

	handleSquareClick(index) {
		if (this.gameState !== "playing") return;
		if (!this.correctSquares.includes(index)) {
			this.level = 1;
			this.gameState = "lost";
		}

		if (this.correctSquares.includes(index)) {
			this.clickedSquares.push(index);
			if (this.clickedSquares.length === this.level) {
				this.gameState = "won";
				this.level = this.level + 1;
				this.startGame();
				return "won";
			}
		}
		return "playing";
	}
}

module.exports = MemoryGame;
