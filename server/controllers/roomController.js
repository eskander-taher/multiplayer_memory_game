const { v4: uuidv4 } = require("uuid");
const roomService = require("../services/roomService");

const createRoom = (req, res) => {
	const newRoomId = uuidv4();
	const newRoom = roomService.createRoom(newRoomId);
	res.json({ newRoomId: newRoom.roomId });
};

module.exports = { createRoom };
