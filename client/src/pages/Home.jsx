import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Home() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
			<button
				onClick={() => navigate("/memory-game/" + uuidv4())}
				className="mt-8 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-500 transition duration-300"
			>
				Play with a friend
			</button>
		</div>
	);
}

export default Home;
