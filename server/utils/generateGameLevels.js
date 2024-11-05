const generateGameLevels = (GAME_GRID_SIZE = 25, LEVELS_NUM = 20) => {
	const levels = [];
	for (let i = 3; i <= LEVELS_NUM; i++) {
		const squares = new Set();
		while (squares.size < i) {
			squares.add(Math.floor(Math.random() * GAME_GRID_SIZE));
		}
		levels.push(Array.from(squares));
	}
	return levels;
};

module.exports = generateGameLevels;
