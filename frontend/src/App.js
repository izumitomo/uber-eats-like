import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Restaurants } from "./containers/Restaurants.jsx";
import { Foods } from "./containers/Foods.jsx";
import { Orders } from "./containers/Orders.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/restaurants" element={<Restaurants />} />
				<Route path="/foods" element={<Foods />} />
				<Route path="/orders" element={<Orders />} />

				<Route
					path="/restaurants/:restaurantsId/foods"
					// render={({ match }) => <Foods match={match} />}
					element={<Foods />}
				/>
				{/* <Route path="/restaurants">
					<Restaurants />
				</Route>
				<Route path="/foods">
					<Foods />
				</Route>
				<Route path="/orders">
					<Orders />
				</Route> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
