// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "../styles/slider-min.css";
import { ChildrenCards } from "../ui";
import { Link } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";

const Slider = ({ data, delay }) => {
	return (
		<Swiper
			style={{
				height: "200px",
			}}
			modules={[Navigation, A11y, Autoplay]}
			spaceBetween={5}
			autoplay={{ delay: delay }}
			slidesPerView={5}
			navigation>
			{data?.map((item, i) => {
				return (
					<SwiperSlide key={i}>
						<Link to={`/more-about/${item.id}`}>
							<ChildrenCards item={item} />
            </Link>
            
						<FavoriteBorder
							sx={{
								position: "absolute",
								top: 0,
								zIndex: 99,
								margin: "5px",
								fontSize: "42px",
								color: "white",
								cursor: "pointer",
							}}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Slider;
