import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Create = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [method, setMethod] = useState("");
	const [rating, setRating] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from("smoothies")
			.insert([{ title, method, rating }]);

		if (error) {
			console.log(error);
		}
		if (data) {
			console.log(data);
		}

		// logic for submitting form
		console.log("form submitted");

		// clear fields
		setTitle("");
		setMethod("");
		setRating("");

		setTimeout(() => {
			navigate("/");
		}, 1500);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-y-5 items-start justify-center"
			>
				<div className="w-full">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="title"
					>
						Title:
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<div className="w-full">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="method"
					>
						Method:
					</label>
					<textarea
						rows={4}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						id="method"
						value={method}
						onChange={(e) => setMethod(e.target.value)}
						required
					/>
				</div>

				<div className="w-full">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="rating"
					>
						Rating:
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="number"
						min={0}
						max={5}
						id="rating"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						required
					/>
					<p
						id="helper-text-explanation"
						className="mt-2 text-sm text-gray-500"
					>
						We’ll never share your details. Read our{" "}
						<a href="/" className="font-medium text-blue-600 hover:underline">
							Privacy Policy
						</a>
						.
					</p>
				</div>

				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Create a smoothie recipe
				</button>
			</form>
		</div>
	);
};

export default Create;
