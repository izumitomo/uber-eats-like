import React from "react";
import { useParams } from "react-router-dom";

export const Foods = () => {
	let params = useParams();
	return (
		<>
			フード一覧
			<p>restaurantsIdは {params.restaurantsId} です</p>
		</>
	);
};
