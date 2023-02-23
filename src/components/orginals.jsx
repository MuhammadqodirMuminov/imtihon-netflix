import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/orginals.css";
import { Link } from "react-router-dom";

const Orginals = ({ data }) => {
	return (
		<>
			<Swiper
				style={{
					height: "575px",
				}}
				modules={[Navigation, A11y]}
				spaceBetween={5}
				slidesPerView={5}
				navigation>
				{data?.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<Link to={`/more-about/${item.id}`}>
								<img
									className="slide-img2"
									src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
									alt="img"
								/>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Orginals;
