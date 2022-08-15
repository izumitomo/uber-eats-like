import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// apis
import { fetchFoods } from "../apis/foods";

export const Foods = () => {
	let params = useParams();
	useEffect(() => {
		fetchFoods(params.restaurantsId).then((data) => console.log(data));
	});

	return (
		<>
			フード一覧
			<p>restaurantsIdは {params.restaurantsId} です</p>
		</>
	);
};
