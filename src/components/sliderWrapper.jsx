import Slider from "./slider";
import classes from "../styles/hero.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	getCardsFailore,
	
	getCardsSuccess,
} from "../slice/cardsSlice";
import { useEffect } from "react";
import CardSevice from "../service/cardsApi";
import Orginals from "./orginals";
import TopCards from "./topCards";

const SliderWrapper = () => {
	const dispatch = useDispatch();

	const { popular, topRated, latest, nowPlaying } = useSelector(
		(state) => state.cards
	);

	const getCardsHandler = async () => {


		try {
			const popular = await CardSevice.getCards("popular");
			const topRated = await CardSevice.getCards("top_rated");
			const latest = await CardSevice.getCards("upcoming");
      const orginals = await CardSevice.getCards("now_playing", 2);
      
     

			// POPULAR
			dispatch(
				getCardsSuccess({
					type: "popular",
					payload: popular.results,
				})
			);

			// TOPRATED
			dispatch(
				getCardsSuccess({
					type: "topRated",
					payload: topRated.results,
				})
			);

			// LATEST
			dispatch(
				getCardsSuccess({
					type: "latest",
					payload: latest.results,
				})
			);

			// ORGINALS
			dispatch(
				getCardsSuccess({
					type: "now_playing",
					payload: orginals.results,
				})
      );
      
      
		} catch (error) {
			dispatch(getCardsFailore(error.message));
		}
	};

	useEffect(() => {
		getCardsHandler();
  }, []);
  
  

	return (
		<div className={classes.sliders}>
			<div className={classes.wrap}>
				<h4 className={classes.slideTitle}>Popular on Netflix</h4>
				<Slider data={popular} delay={4500} />
			</div>
			<div className={classes.wrap}>
				<h4 className={classes.slideTitle}>Trending now</h4>
				<Slider data={topRated} delay={5000} />
			</div>
			<div className={classes.wrap}>
				<h4 className={classes.slideTitle}>My List</h4>
				<Slider data={latest} delay={5400} />
			</div>
			<div className={classes.wrap}>
				<h4 className={classes.slideTitle}>Netflix orginals</h4>
				<Orginals data={nowPlaying} />
			</div>
			<div className={classes.wrap}>
				<h4 className={classes.slideTitle}>Top - 10</h4>
				<TopCards data={topRated.slice(10, 20)} />
			</div>
			<div className={classes.wrap}>
				<h4 className={classes.slideTitle}>Watch again</h4>
			</div>
			<Slider data={latest} delay={2500} />
			<div className={classes.wrap}>
				<h4 className={classes.slideTitle}>System</h4>
				<Slider data={popular} delay={5500} />
			</div>
		</div>
	);
};

export default SliderWrapper;
