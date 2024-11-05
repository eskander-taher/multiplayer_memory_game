import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const [roomId, setRoomId] = useState("");
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
			<button
				disabled={!roomId.trim()}
				onClick={() => navigate("/memory-game/" + roomId)}
				className="mt-8 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-500 transition duration-300"
			>
				Join a game
			</button>
			<input
				className="text-black"
				type="text"
				name="roomId"
				placeholder="enter room id"
				onChange={(e) => setRoomId(e.target.value)}
			/>
		</div>
	);
}

export default Home;
