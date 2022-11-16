import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Update from "./pages/Update";

function App() {
	return (
		<div className="bg-gray-200 min-h-screen">
			<Router>
				<div className="bg-cyan-500 w-full h-24 flex items-center justify-center">
					<nav className="px-5 md:px-0 container mx-auto text-white flex items-center justify-between">
						<h1 className="text-lg md:text-3xl font-black">Supa Smoothies</h1>
						<div className="flex items-center justify-center gap-x-5 md:gap-x-10 text-sm md:text-xl ">
							<Link to="/">Home</Link>
							<Link to="/create">Create New</Link>
						</div>
					</nav>
				</div>
				<div className="px-5 md:px-0 container mx-auto py-10">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create" element={<Create />} />
						<Route path="/update/:id" element={<Update />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
