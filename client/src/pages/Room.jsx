import MemoryGame from "../component/MemoryGame";
import { useParams } from "react-router-dom";

function Room() {
	const { roomId } = useParams();
	return (
		<div>
			<h1 className="text-4xl font-bold   bg-gray-900 text-white text-center">Game Id: {roomId}</h1>
			<MemoryGame roomId={roomId} />
		</div>
	);
}

export default Room;
