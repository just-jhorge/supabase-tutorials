import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [title, setTitle] = useState("");
	const [method, setMethod] = useState("");
	const [rating, setRating] = useState("");

	useEffect(() => {
		const fetchSmoothie = async () => {
			const { data, error } = await supabase
				.from("smoothies")
				.select()
				.eq("id", id)
				.single();

			if (error) {
				alert("Error fetching data");
				navigate("/");
			}

			if (data) {
				setTitle(data.title);
				setMethod(data.method);
				setRating(data.rating);
			}
		};

		fetchSmoothie();

		// eslint-disable-next-line
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from("smoothies")
			.update({ title, method, rating })
			.eq("id", id);

		if (error) console.log(error.message);

		if (data) console.log(data);

		console.log("form updated");

		// clear fields
		setTitle("");
		setMethod("");
		setRating("");

		setTimeout(() => {
			navigate("/");
		}, 1000);
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
				</div>

				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Update
				</button>
			</form>
		</div>
	);
};

export default Update;
