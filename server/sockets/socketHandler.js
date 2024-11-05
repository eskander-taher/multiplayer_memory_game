const { io } = require("../config/server");

const MemoryGame = require("../services/gameService");
const games = {};

const handleSocketConnection = (socket) => {
	console.log("user connected");

	socket.on("joinRoom", (roomId) => {
		socket.join(roomId);
		console.log(`User joined room: ${roomId}`);

		if (!games[roomId]) {
			games[roomId] = new MemoryGame();
		}

		const game = games[roomId];

		socket.emit("initGame", game);

		socket.on("startGame", () => {
			game.startGame();
			io.to(roomId).emit("startGame", game);
			setTimeout(() => {
				game.hideSquares();
				io.to(roomId).emit("hideSquares", game);
			}, 1000);
		});

		socket.on("clickSquare", (index) => {
			const status = game.handleSquareClick(index);
			if (status == "won") {
				io.to(roomId).emit("startGame", game);
				setTimeout(() => {
					game.hideSquares();
					io.to(roomId).emit("hideSquares", game);
				}, 1000);
			} else {
				io.to(roomId).emit("clickSquare", game);
			}
			
		});

		socket.on("disconnect", () => {
			console.log("user disconnected");
		});
	});
};

module.exports = handleSocketConnection;
