import classes from "../styles/hero.module.css";
import banner from "../assets/images/avatar.jpg";
import title from "../assets/images/logo.png";
import top from "../assets/images/Top10Badge.svg";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";


const Hero = () => {
  return (
		<div className={classes.hero}>
			<img src={banner} alt="banner" className={classes["hero-img"]} />
			<div className={classes.container}>
				<div className={classes.info}>
					<img src={title} alt="name" width={"408px"} />

					<div className={classes.turk}>
						<img src={top} alt="top" />
						<span>The 4 th place today</span>
					</div>

					<p className={classes.desc}>
						The story's hero is Jake Sully, a former Marine confined to a
						wheelchair. Bitter and disillusioned, he's still a warrior at
						heart. All Jake ever wanted was something worth fighting for,
						and he finds it in the place he least expected: on a distant
						world.
					</p>

					<div className={classes.buttons}>
						<button className={classes.play}>
							<PlayArrow style={{ fontSize: "32px" }} />
							<span>Play</span>
						</button>
						<button className={classes.more}>
							<InfoOutlined style={{ fontSize: "32px" }} />
							<span>More information</span>
						</button>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Hero;
