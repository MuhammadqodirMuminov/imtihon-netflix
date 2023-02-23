import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/topCard.css";
import { Link } from "react-router-dom";

const TopCards = ({ data }) => {
	return (
		<>
			<Swiper
				style={{
					height: "200px",
				}}
				modules={[Navigation, A11y]}
				spaceBetween={5}
				slidesPerView={5}
				navigation>
				{data?.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<h3
								style={{
									color: "#fff",
									fontSize: "182px",
									fontWeight: "800",
								}}>
								{i + 1}
							</h3>
							<img
								className="slide-img-top"
								src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
								alt="img"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default TopCards;
