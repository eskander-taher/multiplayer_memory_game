import { io } from "socket.io-client";

const URL = import.meta.env.DEV
	? "http://localhost:5000"
	: "https://multiplayer-memory-game-4a89.onrender.com";

export const socket = io(URL, {
	autoConnect: false,
});
