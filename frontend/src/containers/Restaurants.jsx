import React, { useEffect } from "react";
import { fetchRestaurants } from "../apis/restaurants";

export const Restaurants = () => {
	useEffect(() => {
		fetchRestaurants().then((data) => console.log(data));
		console.log("useState!");
	}, []);
	return <>レストラン一覧</>;
};
