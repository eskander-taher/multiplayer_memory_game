import { useState, useEffect } from "react";
import { socket } from "../socket";

const useMemoryGame = (roomId) => {
	const [game, setGame] = useState({
		gridSize: 25,
		difficulty: 5,
		correctSquares: [],
		clickedSquares: [],
		gameState: "waiting",
		showBlackSquares: false,
	});

	useEffect(() => {
		socket.connect();
		function joinRoom() {
			socket.emit("joinRoom", roomId);
		}

		socket.on("connect", joinRoom);

		function onInitGame(game) {
			setGame(game);
		}
		function onStartGame(game) {
			setGame(game);
		}
		function onHideSquares(game) {
			setGame(game);
		}
		function onClickSquare(game) {
			setGame(game);
		}

		socket.on("initGame", onInitGame);
		socket.on("startGame", onStartGame);
		socket.on("hideSquares", onHideSquares);
		socket.on("clickSquare", onClickSquare);

		return () => {
			socket.disconnect();
			socket.off("connect", joinRoom);
			socket.off("initGame", onInitGame);
			socket.off("startGame", onStartGame);
			socket.off("hideSquares", onHideSquares);
			socket.off("clickSquare", onClickSquare);
		};
	}, []);

	return {
		game,
		startGame: () => socket.emit("startGame"),
		clickSquare: (index) => socket.emit("clickSquare", index),
	};
};

export default useMemoryGame;
