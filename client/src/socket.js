import { io } from "socket.io-client";
export const socket = io("https://multiplayer-memory-game-4a89.onrender.com",{
    autoConnect: false
});
