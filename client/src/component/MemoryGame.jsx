import useMemoryGame from "./useMemoryGame";

const MemoryGame = ({ roomId }) => {
	const { game, startGame, clickSquare } = useMemoryGame(roomId);

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
			
			<div className="grid grid-cols-5 gap-2">
				{Array.from({ length: game.gridSize }, (_, index) => (
					<Square game={game} clickSquare={clickSquare} index={index} key={index} />
				))}
			</div>
			{game.gameState != "playing" && <StartButton game={game} startGame={startGame} />}
		</div>
	);
};

function Square({ game, clickSquare, index }) {
	return (
		<div
			key={index}
			className={`w-12 h-12 border border-gray-600 cursor-pointer transition-all duration-300 ${
				game.showBlackSquares && game.correctSquares.includes(index)
					? "bg-slate-300"
					: game.clickedSquares.includes(index)
					? "bg-green-500"
					: "bg-gray-800"
			}`}
			onClick={() => clickSquare(index)}
		></div>
	);
}

function StartButton({ game, startGame }) {
	return (
		<div className="absolute flex flex-col items-center justify-center">
			<button
				onClick={startGame}
				className="mt-8 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-500 transition duration-300"
			>
				{game.gameState == "waiting" && "Start New Game"}
				{game.gameState == "won" && "You won, play again"}
				{game.gameState == "lost" && "You lost, try again"}
				{game.gameState == "playing" && ""}
			</button>
		</div>
	);
}

export default MemoryGame;
