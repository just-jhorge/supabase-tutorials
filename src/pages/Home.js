import { useState, useEffect } from "react";
import SmoothieCard from "../components/SmoothieCard";
import supabase from "../config/supabaseClient";

const Home = () => {
	const [fetchError, setFetchError] = useState(null);
	const [smoothies, setSmoothies] = useState(null);

	useEffect(() => {
		const fetchSmoothies = async () => {
			const { data, error } = await supabase.from("smoothies").select("*");

			if (error) {
				setFetchError("Could not fetch data");
				setSmoothies(null);
				console.log(error);
			}

			if (data) {
				setSmoothies(data);
				setFetchError(null);
			}
		};

		fetchSmoothies();
	}, []);

	return (
		<div>
			{fetchError && <p>{fetchError}</p>}
			{smoothies && (
				<div>
					{/* Order by buttons */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{smoothies.map((smoothie) => (
							<SmoothieCard key={smoothie.id} smoothie={smoothie} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
