import MemoryGame from "../component/MemoryGame";
import { useParams } from "react-router-dom";

function Room() {
	const { roomId } = useParams();
	return (
		<div>
			<MemoryGame roomId={roomId} />
		</div>
	);
}

export default Room;
