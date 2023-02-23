
import React from "react";

const ChildrenCards = ({ item }) => {
	return (
		<>
			<img
				className="slide-img"
				src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
				alt="img"
			/>
			
		</>
	);
};

export default ChildrenCards;
