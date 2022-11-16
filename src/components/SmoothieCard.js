import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {
	return (
		<div className="relative flex flex-col items-start justify-between bg-white px-3 py-4 rounded-lg">
			<div>
				<h3 className="font-bold mb-2">{smoothie.title}</h3>
				<p>{smoothie.method}</p>
				<div className="absolute -top-3 -right-2 bg-fuchsia-800 text-white h-8 w-8 flex items-center justify-center rounded-lg">
					{smoothie.rating}
				</div>
			</div>
			<div className="w-full flex items-center justify-end gap-2">
				<Link to={`update/${smoothie.id}`}>
					<button
						type="button"
						className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mt-2"
					>
						Edit
					</button>
				</Link>
				<button
					type="button"
					className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mt-2"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default SmoothieCard;
